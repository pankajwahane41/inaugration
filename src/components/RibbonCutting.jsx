import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Scissors } from 'lucide-react';

const RibbonCutting = ({ onComplete }) => {
    const [stage, setStage] = useState('ready'); // ready -> cutting -> cut -> revealing
    const [showScissors, setShowScissors] = useState(true);
    const [particles, setParticles] = useState([]);

    const handleCut = () => {
        if (stage === 'ready') {
            setStage('cutting');
            setShowScissors(false);

            // Generate particle explosion
            const newParticles = Array.from({ length: 50 }, (_, i) => ({
                id: i,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                rotation: Math.random() * 360,
                delay: Math.random() * 0.2,
            }));
            setParticles(newParticles);

            setTimeout(() => setStage('cut'), 800);
            setTimeout(() => setStage('revealing'), 1500);
            setTimeout(() => onComplete(), 3500);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at center, #1a1a2e 0%, #0a0a14 100%)',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated background stars */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                    style={{
                        position: 'absolute',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: '3px',
                        height: '3px',
                        borderRadius: '50%',
                        background: 'white',
                        boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                    }}
                />
            ))}

            {/* Instruction */}
            <AnimatePresence>
                {stage === 'ready' && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            position: 'absolute',
                            top: '8%',
                            textAlign: 'center',
                            zIndex: 20,
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles size={48} color="#FFD700" style={{ margin: '0 auto', marginBottom: '1rem' }} />
                        </motion.div>

                        <h2
                            style={{
                                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                                color: 'white',
                                fontWeight: 800,
                                marginBottom: '0.5rem',
                                textShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
                            }}
                        >
                            Click the Ribbon to Inaugurate
                        </h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.3rem' }}>
                            Unveil the future of education and empowerment
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Scissors */}
            <AnimatePresence>
                {showScissors && (
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{
                            scale: 1,
                            rotate: 45,
                            y: [0, -20, 0],
                        }}
                        exit={{ scale: 0, rotate: 180, opacity: 0 }}
                        transition={{
                            scale: { duration: 0.6, type: 'spring' },
                            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                        }}
                        style={{
                            position: 'absolute',
                            top: '25%',
                            zIndex: 15,
                        }}
                    >
                        <motion.div
                            animate={{
                                filter: [
                                    'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
                                    'drop-shadow(0 0 30px rgba(255, 215, 0, 0.8))',
                                    'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))',
                                ],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <Scissors size={80} color="#FFD700" strokeWidth={2.5} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Particle Explosion */}
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ scale: 0, x: '50vw', y: '50vh', opacity: 1 }}
                        animate={{
                            scale: [1, 0],
                            x: `calc(50vw + ${particle.x}vw)`,
                            y: `calc(50vh + ${particle.y}vh)`,
                            opacity: [1, 0],
                            rotate: particle.rotation,
                        }}
                        transition={{
                            duration: 1.5,
                            delay: particle.delay,
                            ease: 'easeOut',
                        }}
                        style={{
                            position: 'absolute',
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: particle.id % 3 === 0 ? '#FFD700' : particle.id % 3 === 1 ? '#FF6B35' : '#667eea',
                            boxShadow: '0 0 10px currentColor',
                        }}
                    />
                ))}
            </AnimatePresence>

            {/* Main Stage */}
            <div
                style={{
                    display: 'flex',
                    gap: '3rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '1400px',
                    position: 'relative',
                    zIndex: 10,
                }}
            >
                {/* CLH Card */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        position: 'relative',
                        width: '450px',
                        height: '550px',
                        perspective: '1000px',
                    }}
                >
                    {/* Glowing border */}
                    <motion.div
                        animate={{
                            boxShadow: [
                                '0 0 30px rgba(102, 126, 234, 0.3)',
                                '0 0 60px rgba(102, 126, 234, 0.6)',
                                '0 0 30px rgba(102, 126, 234, 0.3)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                            position: 'absolute',
                            inset: '-5px',
                            borderRadius: '25px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            opacity: 0.3,
                            zIndex: 0,
                        }}
                    />

                    {/* Card Content */}
                    <div
                        className="glass"
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
                            border: '2px solid rgba(102, 126, 234, 0.3)',
                        }}
                    >
                        {/* Ribbon Overlay */}
                        <AnimatePresence>
                            {(stage === 'ready' || stage === 'cutting') && (
                                <>
                                    <motion.div
                                        initial={{ scaleX: 1 }}
                                        animate={stage === 'cutting' ? { scaleX: 0 } : { scaleX: 1 }}
                                        exit={{ scaleX: 0, opacity: 0 }}
                                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                                        onClick={handleCut}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            transformOrigin: 'center',
                                            cursor: stage === 'ready' ? 'pointer' : 'default',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                            gap: '2rem',
                                            zIndex: 5,
                                        }}
                                    >
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 5, -5, 0],
                                            }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            style={{
                                                fontSize: '5rem',
                                                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                                            }}
                                        >
                                            🎀
                                        </motion.div>

                                        {stage === 'ready' && (
                                            <motion.div
                                                animate={{ opacity: [0.7, 1, 0.7] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                style={{
                                                    fontSize: '2rem',
                                                    fontWeight: 800,
                                                    color: 'white',
                                                    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                                    letterSpacing: '3px',
                                                }}
                                            >
                                                CLICK TO CUT
                                            </motion.div>
                                        )}
                                    </motion.div>

                                    {/* Shimmer Effect */}
                                    <motion.div
                                        animate={{
                                            x: ['-100%', '200%'],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '50%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                            zIndex: 6,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                </>
                            )}
                        </AnimatePresence>

                        {/* Revealed Content */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: stage === 'cut' || stage === 'revealing' ? 1 : 0.8,
                                opacity: stage === 'cut' || stage === 'revealing' ? 1 : 0,
                            }}
                            transition={{ duration: 1, delay: 0.3 }}
                            style={{
                                width: '100%',
                                height: '100%',
                                padding: '3rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <motion.div
                                animate={stage === 'revealing' ? {
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 360],
                                } : {}}
                                transition={{ duration: 1 }}
                                style={{
                                    fontSize: '6rem',
                                    marginBottom: '1.5rem',
                                    filter: 'drop-shadow(0 10px 30px rgba(102, 126, 234, 0.5))',
                                }}
                            >
                                📚
                            </motion.div>

                            <h3
                                className="gradient-text"
                                style={{
                                    fontSize: '2.2rem',
                                    fontWeight: 900,
                                    marginBottom: '1rem',
                                    lineHeight: 1.2,
                                }}
                            >
                                Constitution Learning Hub
                            </h3>

                            <p style={{ color: 'white', fontSize: '1.2rem', lineHeight: 1.6, opacity: 0.9 }}>
                                Interactive educational platform for understanding the Indian Constitution
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* BHS Card */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{
                        position: 'relative',
                        width: '450px',
                        height: '550px',
                        perspective: '1000px',
                    }}
                >
                    {/* Glowing border */}
                    <motion.div
                        animate={{
                            boxShadow: [
                                '0 0 30px rgba(255, 107, 53, 0.3)',
                                '0 0 60px rgba(255, 107, 53, 0.6)',
                                '0 0 30px rgba(255, 107, 53, 0.3)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        style={{
                            position: 'absolute',
                            inset: '-5px',
                            borderRadius: '25px',
                            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                            opacity: 0.3,
                            zIndex: 0,
                        }}
                    />

                    {/* Card Content */}
                    <div
                        className="glass"
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, rgba(247, 147, 30, 0.15) 100%)',
                            border: '2px solid rgba(255, 107, 53, 0.3)',
                        }}
                    >
                        {/* Ribbon Overlay */}
                        <AnimatePresence>
                            {(stage === 'ready' || stage === 'cutting') && (
                                <>
                                    <motion.div
                                        initial={{ scaleX: 1 }}
                                        animate={stage === 'cutting' ? { scaleX: 0 } : { scaleX: 1 }}
                                        exit={{ scaleX: 0, opacity: 0 }}
                                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                                        onClick={handleCut}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                                            transformOrigin: 'center',
                                            cursor: stage === 'ready' ? 'pointer' : 'default',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'column',
                                            gap: '2rem',
                                            zIndex: 5,
                                        }}
                                    >
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                rotate: [0, -5, 5, 0],
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                            style={{
                                                fontSize: '5rem',
                                                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                                            }}
                                        >
                                            🎀
                                        </motion.div>

                                        {stage === 'ready' && (
                                            <motion.div
                                                animate={{ opacity: [0.7, 1, 0.7] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                                style={{
                                                    fontSize: '2rem',
                                                    fontWeight: 800,
                                                    color: 'white',
                                                    textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                                                    letterSpacing: '3px',
                                                }}
                                            >
                                                CLICK TO CUT
                                            </motion.div>
                                        )}
                                    </motion.div>

                                    {/* Shimmer Effect */}
                                    <motion.div
                                        animate={{
                                            x: ['-100%', '200%'],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'linear',
                                            delay: 0.5,
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '50%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                            zIndex: 6,
                                            pointerEvents: 'none',
                                        }}
                                    />
                                </>
                            )}
                        </AnimatePresence>

                        {/* Revealed Content */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: stage === 'cut' || stage === 'revealing' ? 1 : 0.8,
                                opacity: stage === 'cut' || stage === 'revealing' ? 1 : 0,
                            }}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{
                                width: '100%',
                                height: '100%',
                                padding: '3rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <motion.div
                                animate={stage === 'revealing' ? {
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 360],
                                } : {}}
                                transition={{ duration: 1, delay: 0.2 }}
                                style={{
                                    fontSize: '6rem',
                                    marginBottom: '1.5rem',
                                    filter: 'drop-shadow(0 10px 30px rgba(255, 107, 53, 0.5))',
                                }}
                            >
                                🏛️
                            </motion.div>

                            <h3
                                className="gold-text"
                                style={{
                                    fontSize: '2.2rem',
                                    fontWeight: 900,
                                    marginBottom: '1rem',
                                    lineHeight: 1.2,
                                }}
                            >
                                Bahujan Hitay Sangh
                            </h3>

                            <p style={{ color: 'white', fontSize: '1.2rem', lineHeight: 1.6, opacity: 0.9 }}>
                                Empowering the Buddhist community through education and social justice
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default RibbonCutting;
