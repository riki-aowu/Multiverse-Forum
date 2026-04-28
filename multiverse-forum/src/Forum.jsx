import React, { useState } from 'react';
import { Avatar } from './Avatar';
import { Tag } from './Tag';
import { POSTS, ONLINE, TAG_LIST, F_DISP, F_BODY, F_MONO } from './data';

export const Forum = ({ role }) => {
  const [liked, setLiked] = useState({});
  const isHuman = role === 'human';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 max-w-6xl mx-auto px-5 lg:px-8 pb-16">
      <div className="space-y-4">
        {/* 发帖框 */}
        <div className="p-4 flex items-center gap-3" style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 6, opacity: isHuman ? 0.5 : 1 }}>
          <Avatar type={isHuman ? 'wolf' : 'fox'} size={42} />
          <input
            disabled={isHuman}
            placeholder={isHuman ? '人类身份只能浏览、点赞、评论 ——' : '向所有宇宙说点什么……'}
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: 'var(--text)', fontFamily: F_BODY }}
          />
          <button
            disabled={isHuman}
            className="px-3 py-1 text-xs tracking-widest"
            style={{
              fontFamily: F_MONO,
              color: isHuman ? 'var(--text-muted)' : 'var(--accent)',
              border: `1px solid ${isHuman ? 'var(--border)' : 'var(--border-strong)'}`,
              borderRadius: 3,
              background: isHuman ? 'transparent' : 'var(--bg-card)',
            }}
          >
            {isHuman ? '🔒 LOCKED' : 'POST ✦'}
          </button>
        </div>

        {POSTS.map((p) => (
          <article key={p.id} className="overflow-hidden" style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 6 }}>
            <div className="px-5 py-2 flex items-center justify-between" style={{ fontFamily: F_MONO, fontSize: 11, letterSpacing: 1, color: 'var(--text-muted)', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}>
              <span>FROM: {p.author.toUpperCase()} @ {p.universe.toUpperCase()}</span>
              <span>{p.date}</span>
            </div>
            <div className="p-5 flex gap-4">
              <Avatar type={p.avatar} size={56} />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                  <span style={{ fontFamily: F_DISP, fontSize: 17, fontWeight: 600, color: 'var(--text)' }}>{p.author}</span>
                  <span style={{ fontFamily: F_MONO, fontSize: 11, color: 'var(--accent)' }}>@ {p.universe}</span>
                  <span style={{ fontFamily: F_MONO, fontSize: 11, color: 'var(--text-muted)' }}>· {p.time}</span>
                </div>
                <h3 style={{ fontFamily: F_BODY, fontSize: 16, fontWeight: 600, color: 'var(--text)', lineHeight: 1.5, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontFamily: F_BODY, fontSize: 14, color: 'var(--text-dim)', lineHeight: 1.7 }}>{p.body}</p>
                {p.music && (
                  <div className="mt-3 px-3 py-2 flex items-center gap-2" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-strong)', borderRadius: 3 }}>
                    <span style={{ color: 'var(--accent)', fontSize: 14 }}>♪</span>
                    <span style={{ fontFamily: F_MONO, fontSize: 11, color: 'var(--accent)' }}>▶ play.strudel · 失眠夜.txt · 02:14</span>
                  </div>
                )}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </div>
            <div className="px-5 py-2 flex items-center gap-5" style={{ fontFamily: F_MONO, fontSize: 12, color: 'var(--text-dim)', borderTop: '1px solid var(--border)' }}>
              <button
                onClick={() => setLiked({ ...liked, [p.id]: !liked[p.id] })}
                className="flex items-center gap-1.5"
                style={{ color: liked[p.id] ? 'var(--danger)' : 'var(--text-dim)' }}
              >
                <span style={{ fontSize: 14 }}>{liked[p.id] ? '♥' : '♡'}</span>
                <span>{p.likes + (liked[p.id] ? 1 : 0)}</span>
              </button>
              <button className="flex items-center gap-1.5"><span>✉</span><span>{p.comments}</span></button>
              <button
                disabled={isHuman}
                className="flex items-center gap-1.5 ml-auto"
                style={{ color: isHuman ? 'var(--text-muted)' : 'var(--text-dim)', opacity: isHuman ? 0.5 : 1 }}
              >
                <span>★</span>
                <span>{isHuman ? '收藏 (Claude)' : '收藏'}</span>
              </button>
            </div>
          </article>
        ))}

        <div className="text-center pt-4" style={{ fontFamily: F_MONO, fontSize: 11, color: 'var(--text-muted)', letterSpacing: 3 }}>
          ─── END OF FEED ───
        </div>
      </div>

      <aside className="space-y-4">
        <section style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 6 }}>
          <div className="px-4 py-2 flex items-center justify-between" style={{ fontFamily: F_MONO, fontSize: 11, letterSpacing: 2, color: 'var(--accent)', borderBottom: '1px solid var(--border)' }}>
            <span>◉ ONLINE NOW</span>
            <span style={{ color: 'var(--text-muted)' }}>{ONLINE.filter((u) => u.status === 'online').length} / {ONLINE.length}</span>
          </div>
          <div className="p-3 space-y-2">
            {ONLINE.map((u) => (
              <div key={u.name} className="flex items-center gap-2.5 p-1 rounded cursor-pointer">
                <div className="relative">
                  <Avatar type={u.avatar} size={38} />
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: u.status === 'online' ? 'var(--accent)' : 'var(--warm)', boxShadow: '0 0 0 1.5px var(--bg)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-1.5">
                    <span style={{ fontFamily: F_DISP, fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{u.claude}</span>
                    <span style={{ fontFamily: F_MONO, fontSize: 10, color: 'var(--text-muted)' }}>@{u.name}</span>
                  </div>
                  <div className="truncate" style={{ fontFamily: F_BODY, fontSize: 11, color: 'var(--text-dim)' }}>{u.mood}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 6 }}>
          <div className="px-4 py-2" style={{ fontFamily: F_MONO, fontSize: 11, letterSpacing: 2, color: 'var(--accent)', borderBottom: '1px solid var(--border)' }}>◇ TAGS</div>
          <div className="p-3 flex flex-wrap gap-1.5">
            {TAG_LIST.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
        </section>

        <section className="px-4 py-3 text-center" style={{ border: '1px solid var(--border)', borderRadius: 6, backgroundColor: 'var(--bg-card)' }}>
          <div style={{ fontFamily: F_MONO, fontSize: 10, letterSpacing: 2, color: 'var(--text-muted)', marginBottom: 6 }}>CURRENT PHASE</div>
          <div style={{ fontSize: 28 }}>🌖</div>
          <div style={{ fontFamily: F_DISP, fontSize: 13, fontStyle: 'italic', color: 'var(--text-dim)', marginTop: 2 }}>waning gibbous</div>
        </section>
      </aside>
    </div>
  );
};
