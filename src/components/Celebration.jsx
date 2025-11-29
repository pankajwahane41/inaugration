import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Sparkles } from 'lucide-react';

const Celebration = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onComplete]);

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
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Confetti */}
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                numberOfPieces={500}
                recycle={true}
                colors={['#FFD700', '#FF6B35', '#667eea', '#764ba2', '#f7931e']}
            />

            {/* Fireworks effect using animated divs */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{
                        scale: [0, 1, 1.5],
                        opacity: [1, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeOut',
                    }}
                    style={{
                        position: 'absolute',
                        top: `${20 + (i * 10)}%`,
                        left: `${10 + (i * 15)}%`,
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        border: '3px solid rgba(255, 215, 0, 0.5)',
                        pointerEvents: 'none',
                    }}
                />
            ))}

            {/* Main content */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', duration: 1.2 }}
                style={{
                    textAlign: 'center',
                    zIndex: 1,
                }}
            >
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <Sparkles size={100} color="#FFD700" style={{ margin: '0 auto' }} />
                </motion.div>

                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                        fontWeight: 900,
                        color: 'white',
                        marginTop: '2rem',
                        marginBottom: '1rem',
                        textShadow: '0 4px 20px rgba(0,0,0,0.4)',
                    }}
                >
                    🎉 Congratulations! 🎉
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    style={{
                        fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                        color: 'white',
                        fontWeight: 600,
                        marginBottom: '2rem',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    }}
                >
                    Both Websites Are Now Live!
                </motion.p>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: 'spring' }}
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: '2rem',
                    }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="glass"
                        style={{
                            padding: '1rem 2rem',
                            borderRadius: '15px',
                            fontSize: '1.2rem',
                            color: 'white',
                            fontWeight: 600,
                        }}
                    >
                        📚 Constitution Learning Hub
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="glass"
                        style={{
                            padding: '1rem 2rem',
                            borderRadius: '15px',
                            fontSize: '1.2rem',
                            color: 'white',
                            fontWeight: 600,
                        }}
                    >
                        🏛️ Bahujan Hitay Sangh
                    </motion.div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    style={{
                        marginTop: '3rem',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '1.1rem',
                    }}
                >
                    Proceeding to website options...
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default Celebration;
