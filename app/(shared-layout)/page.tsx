"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

const floatingOrbs = [
  { size: 300, x: "10%", y: "15%", color: "#7c3aed", delay: 0 },
  { size: 200, x: "75%", y: "8%", color: "#2563eb", delay: 1.2 },
  { size: 250, x: "60%", y: "55%", color: "#6d28d9", delay: 0.6 },
  { size: 180, x: "20%", y: "65%", color: "#1d4ed8", delay: 1.8 },
  { size: 120, x: "85%", y: "75%", color: "#7c3aed", delay: 0.3 },
];

const features = [
  {
    icon: "✦",
    title: "Craft Stories",
    desc: "Pour your thoughts into beautifully formatted articles that captivate from the first word.",
  },
  {
    icon: "◈",
    title: "Real-time Presence",
    desc: "See who's reading alongside you. Every post glows with live viewer presence.",
  },
  {
    icon: "⬡",
    title: "Instant Comments",
    desc: "Conversations unfold in real-time. No refreshing, no waiting — just dialogue.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div
      style={{
        background: "#05040f",
        minHeight: "100vh",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        color: "#e8e0ff",
        overflowX: "hidden",
      }}
    >
      {/* Ambient background orbs */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {floatingOrbs.map((orb, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: orb.x,
              top: orb.y,
              width: orb.size,
              height: orb.size,
              borderRadius: "50%",
              background: orb.color,
              filter: "blur(80px)",
              opacity: 0.12,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.12, 0.18, 0.12],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: orb.delay,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Noise grain overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
            opacity: 0.4,
          }}
        />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <motion.div style={{ y: heroY, opacity: heroOpacity }}>
          {/* Eyebrow */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 40,
              padding: "8px 20px",
              border: "1px solid rgba(124, 58, 237, 0.4)",
              borderRadius: 100,
              background: "rgba(124, 58, 237, 0.08)",
              backdropFilter: "blur(10px)",
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a78bfa",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#7c3aed",
                display: "inline-block",
                boxShadow: "0 0 8px #7c3aed",
              }}
            />
            A place for thoughts
          </motion.div>

          {/* Main headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(52px, 9vw, 110px)",
                fontWeight: 400,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                marginBottom: 0,
                color: "#f0ecff",
              }}
            >
              Where Words
            </motion.h1>
            <motion.h1
              variants={fadeUp}
              style={{
                fontSize: "clamp(52px, 9vw, 110px)",
                fontWeight: 400,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                marginBottom: 0,
                fontStyle: "italic",
                background:
                  "linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #a78bfa 100%)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              Become Worlds
            </motion.h1>
          </motion.div>

          {/* Divider rune */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            style={{
              fontSize: 28,
              color: "#7c3aed",
              margin: "28px 0",
              letterSpacing: 16,
              opacity: 0.7,
            }}
          >
            ✦ ✦ ✦
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#9d8ec4",
              maxWidth: 520,
              margin: "0 auto 48px",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            A living archive of ideas — written in real-time, read together,
            remembered forever.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/blog" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 40px rgba(124,58,237,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "16px 40px",
                  background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                  border: "none",
                  borderRadius: 100,
                  color: "#fff",
                  fontSize: 15,
                  fontFamily: "inherit",
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  fontWeight: 500,
                }}
              >
                Enter the Archive
              </motion.button>
            </Link>
            <Link href="/create" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{
                  scale: 1.04,
                  borderColor: "#7c3aed",
                  color: "#c4b5fd",
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "16px 40px",
                  background: "transparent",
                  border: "1px solid rgba(124,58,237,0.35)",
                  borderRadius: 100,
                  color: "#9d8ec4",
                  fontSize: 15,
                  fontFamily: "inherit",
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              >
                Begin Writing
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            position: "absolute",
            bottom: 40,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: "#4c3d72", fontSize: 22 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "120px 24px",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#5b4d8a",
              marginBottom: 16,
            }}
          >
            What lives here
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 400,
              color: "#e8e0ff",
              lineHeight: 1.2,
            }}
          >
            More than a blog.
            <br />
            <span style={{ fontStyle: "italic", color: "#a78bfa" }}>
              A living ritual.
            </span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, borderColor: "rgba(124,58,237,0.5)" }}
              style={{
                padding: "40px 32px",
                border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: 20,
                background: "rgba(124,58,237,0.04)",
                backdropFilter: "blur(20px)",
                transition: "border-color 0.3s",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 20, color: "#7c3aed" }}>
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 400,
                  marginBottom: 12,
                  color: "#d4caff",
                  letterSpacing: "-0.01em",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  color: "#6b5d8f",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "80px 24px 160px",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: 640,
            margin: "0 auto",
            padding: "80px 48px",
            border: "1px solid rgba(124,58,237,0.25)",
            borderRadius: 32,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        >
          <div
            style={{
              fontSize: 40,
              marginBottom: 24,
              color: "#7c3aed",
              opacity: 0.8,
            }}
          >
            ✦
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 400,
              marginBottom: 16,
              color: "#e8e0ff",
              lineHeight: 1.3,
            }}
          >
            Your story is waiting
            <br />
            <span style={{ fontStyle: "italic", color: "#a78bfa" }}>
              to be told.
            </span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#6b5d8f",
              marginBottom: 40,
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
          >
            Join the archive. Write something that outlasts the moment.
          </p>
          <Link href="/auth/sign-up" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 60px rgba(124,58,237,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "18px 48px",
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                border: "none",
                borderRadius: 100,
                color: "#fff",
                fontSize: 16,
                fontFamily: "inherit",
                letterSpacing: "0.06em",
                cursor: "pointer",
              }}
            >
              Begin Your Journey
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
