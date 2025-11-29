import { motion } from 'framer-motion';
import { Gavel, Award } from 'lucide-react';

const JusticeIntroduction = ({ onProceed }) => {
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
                background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
                padding: '2rem',
            }}
        >
            <motion.div
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="glass"
                style={{
                    maxWidth: '900px',
                    padding: '3rem',
                    borderRadius: '30px',
                    textAlign: 'center',
                }}
            >
                {/* Justice Icon */}
                <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{
                        width: '150px',
                        height: '150px',
                        margin: '0 auto 2rem',
                        background: 'linear-gradient(135deg, #ffd89b 0%, #19547b 100%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 40px rgba(255, 215, 0, 0.3)',
                    }}
                >
                    <Gavel size={70} color="white" />
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: 700,
                        color: 'white',
                        marginBottom: '1rem',
                    }}
                >
                    Presiding Over Today's Ceremony
                </motion.h2>

                {/* Justice Name */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="gold-text"
                    style={{
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 900,
                        marginBottom: '1.5rem',
                    }}
                >
                    Justice Kolte Patil
                </motion.h1>

                {/* Description */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                        lineHeight: 1.8,
                        marginBottom: '2rem',
                    }}
                >
                    <p style={{ marginBottom: '1rem' }}>
                        A distinguished jurist dedicated to upholding constitutional values
                        and advancing social justice for all communities.
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                            marginTop: '1.5rem',
                            flexWrap: 'wrap',
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="glass"
                            style={{
                                padding: '0.8rem 1.5rem',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                            }}
                        >
                            <Award size={24} color="#FFD700" />
                            <span style={{ color: 'white' }}>Champion of Justice</span>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="glass"
                            style={{
                                padding: '0.8rem 1.5rem',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                            }}
                        >
                            <Gavel size={24} color="#FFD700" />
                            <span style={{ color: 'white' }}>Legal Scholar</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Proceed Button */}
                <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(255, 215, 0, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onProceed}
                    className="btn btn-gold"
                    style={{
                        padding: '1.2rem 3rem',
                        fontSize: '1.2rem',
                    }}
                >
                    Proceed to Inauguration 🎊
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default JusticeIntroduction;
