import { motion } from 'framer-motion';
import { Sparkles, Scale, Flower2 } from 'lucide-react';

const WelcomeScreen = ({ onProceed }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated background elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    opacity: 0.1,
                }}
            >
                <Scale size={200} color="white" />
            </motion.div>

            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    opacity: 0.1,
                }}
            >
                <Flower2 size={180} color="white" />
            </motion.div>

            {/* Main content */}
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{ textAlign: 'center', zIndex: 1 }}
            >
                <Sparkles size={64} color="#FFD700" style={{ margin: '0 auto', marginBottom: '1rem' }} />

                <h1
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontWeight: 800,
                        color: 'white',
                        marginBottom: '1rem',
                        textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    }}
                >
                    Website Inauguration Ceremony
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        color: 'rgba(255,255,255,0.9)',
                        marginBottom: '2rem',
                        maxWidth: '800px',
                        lineHeight: 1.6,
                    }}
                >
                    A momentous occasion as we launch two transformative platforms dedicated to
                    constitutional education and community empowerment
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        alignItems: 'center',
                    }}
                >
                    <div
                        className="glass"
                        style={{
                            padding: '1.5rem 2rem',
                            borderRadius: '15px',
                            marginBottom: '1rem',
                        }}
                    >
                        <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                            📚 Constitution Learning Hub
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
                            Interactive platform for learning about the Indian Constitution
                        </p>
                    </div>

                    <div
                        className="glass"
                        style={{
                            padding: '1.5rem 2rem',
                            borderRadius: '15px',
                            marginBottom: '2rem',
                        }}
                    >
                        <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                            🏛️ Bahujan Hitay Sangh Pune
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
                            Empowering the Buddhist community through education and social justice
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onProceed}
                        className="btn btn-gold"
                        style={{
                            padding: '1.2rem 3rem',
                            fontSize: '1.2rem',
                        }}
                    >
                        Begin Ceremony ✨
                    </motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default WelcomeScreen;
