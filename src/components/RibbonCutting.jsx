import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

const RibbonCutting = ({ onComplete }) => {
    const [isCut, setIsCut] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleCut = () => {
        if (!isCut) {
            setIsCut(true);
            setTimeout(() => {
                onComplete();
            }, 2000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseMove={handleMouseMove}
            onClick={handleCut}
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                padding: '2rem',
                cursor: isCut ? 'default' : 'pointer',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Instruction */}
            {!isCut && (
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        textAlign: 'center',
                        zIndex: 10,
                    }}
                >
                    <h2
                        style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            color: 'white',
                            fontWeight: 700,
                            marginBottom: '1rem',
                        }}
                    >
                        Click to Cut the Ribbon
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
                        Unveil both websites simultaneously
                    </p>
                </motion.div>
            )}

            {/* Scissors following cursor */}
            {!isCut && (
                <motion.div
                    animate={{
                        x: mousePos.x - 30,
                        y: mousePos.y - 30,
                        rotate: 45,
                    }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    style={{
                        position: 'absolute',
                        pointerEvents: 'none',
                        zIndex: 20,
                    }}
                >
                    <Scissors size={60} color="#FFD700" />
                </motion.div>
            )}

            {/* Website Curtains */}
            <div
                style={{
                    display: 'flex',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: '1200px',
                }}
            >
                {/* Constitution Learning Hub */}
                <motion.div
                    style={{
                        position: 'relative',
                        width: '400px',
                        height: '500px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                    }}
                >
                    {/* Ribbon */}
                    <motion.div
                        animate={{
                            x: isCut ? -200 : 0,
                            opacity: isCut ? 0 : 1,
                        }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '50%',
                            height: '100%',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            zIndex: 5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '5px 0 20px rgba(0,0,0,0.3)',
                        }}
                    >
                        <div
                            style={{
                                transform: 'rotate(-90deg)',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: 'white',
                                letterSpacing: '2px',
                            }}
                        >
                            RIBBON
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{
                            x: isCut ? 200 : 0,
                            opacity: isCut ? 0 : 1,
                        }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '50%',
                            height: '100%',
                            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                            zIndex: 5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '-5px 0 20px rgba(0,0,0,0.3)',
                        }}
                    >
                        <div
                            style={{
                                transform: 'rotate(-90deg)',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: 'white',
                                letterSpacing: '2px',
                            }}
                        >
                            RIBBON
                        </div>
                    </motion.div>

                    {/* Content behind */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: isCut ? 1 : 0.8, opacity: isCut ? 1 : 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="glass"
                        style={{
                            width: '100%',
                            height: '100%',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <h3
                            className="gradient-text"
                            style={{
                                fontSize: '1.8rem',
                                fontWeight: 800,
                                marginBottom: '1rem',
                            }}
                        >
                            📚 Constitution Learning Hub
                        </h3>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: 1.6 }}>
                            Interactive educational platform for understanding the Indian Constitution
                        </p>
                    </motion.div>
                </motion.div>

                {/* BHS Pune */}
                <motion.div
                    style={{
                        position: 'relative',
                        width: '400px',
                        height: '500px',
                        borderRadius: '20px',
                        overflow: 'hidden',
                    }}
                >
                    {/* Ribbon */}
                    <motion.div
                        animate={{
                            x: isCut ? -200 : 0,
                            opacity: isCut ? 0 : 1,
                        }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '50%',
                            height: '100%',
                            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                            zIndex: 5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '5px 0 20px rgba(0,0,0,0.3)',
                        }}
                    >
                        <div
                            style={{
                                transform: 'rotate(-90deg)',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: 'white',
                                letterSpacing: '2px',
                            }}
                        >
                            RIBBON
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{
                            x: isCut ? 200 : 0,
                            opacity: isCut ? 0 : 1,
                        }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '50%',
                            height: '100%',
                            background: 'linear-gradient(135deg, #f7931e 0%, #ff6b35 100%)',
                            zIndex: 5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '-5px 0 20px rgba(0,0,0,0.3)',
                        }}
                    >
                        <div
                            style={{
                                transform: 'rotate(-90deg)',
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: 'white',
                                letterSpacing: '2px',
                            }}
                        >
                            RIBBON
                        </div>
                    </motion.div>

                    {/* Content behind */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: isCut ? 1 : 0.8, opacity: isCut ? 1 : 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="glass"
                        style={{
                            width: '100%',
                            height: '100%',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <h3
                            className="gold-text"
                            style={{
                                fontSize: '1.8rem',
                                fontWeight: 800,
                                marginBottom: '1rem',
                            }}
                        >
                            🏛️ Bahujan Hitay Sangh
                        </h3>
                        <p style={{ color: 'white', fontSize: '1.1rem', lineHeight: 1.6 }}>
                            Empowering the Buddhist community through education and social justice
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default RibbonCutting;
