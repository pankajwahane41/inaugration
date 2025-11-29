import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Users } from 'lucide-react';

const WebsiteReveal = () => {
    const handleVisit = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

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
                background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
                padding: '2rem',
            }}
        >
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                    textAlign: 'center',
                    marginBottom: '3rem',
                }}
            >
                <h1
                    style={{
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 900,
                        color: 'white',
                        marginBottom: '1rem',
                    }}
                >
                    ✨ Welcome to the New Era ✨
                </h1>
                <p
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        color: 'rgba(255,255,255,0.8)',
                        maxWidth: '800px',
                        margin: '0 auto',
                    }}
                >
                    Choose a platform to explore or visit both to experience the complete vision
                </p>
            </motion.div>

            {/* Website Cards */}
            <div
                style={{
                    display: 'flex',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    maxWidth: '1200px',
                }}
            >
                {/* Constitution Learning Hub Card */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="glass"
                    style={{
                        width: '450px',
                        padding: '2.5rem',
                        borderRadius: '25px',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                        border: '2px solid rgba(102, 126, 234, 0.3)',
                    }}
                >
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            width: '120px',
                            height: '120px',
                            margin: '0 auto 1.5rem',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)',
                        }}
                    >
                        <BookOpen size={60} color="white" />
                    </motion.div>

                    <h2
                        className="gradient-text"
                        style={{
                            fontSize: '2rem',
                            fontWeight: 800,
                            marginBottom: '1rem',
                        }}
                    >
                        Constitution Learning Hub
                    </h2>

                    <p
                        style={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            marginBottom: '2rem',
                        }}
                    >
                        Explore the Indian Constitution through interactive lessons, engaging
                        stories, and educational games designed to make learning enjoyable and accessible.
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.8rem',
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: '0.95rem',
                            marginBottom: '2rem',
                            textAlign: 'left',
                        }}
                    >
                        <div>✅ Interactive Learning Modules</div>
                        <div>✅ Constitutional Stories & History</div>
                        <div>✅ Educational Games & Quizzes</div>
                        <div>✅ Gamification & Progress Tracking</div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleVisit('https://clh.bhspune.com')}
                        className="btn btn-primary"
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                        }}
                    >
                        Visit CLH
                        <ExternalLink size={20} />
                    </motion.button>
                </motion.div>

                {/* BHS Pune Card */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="glass"
                    style={{
                        width: '450px',
                        padding: '2.5rem',
                        borderRadius: '25px',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(247, 147, 30, 0.2) 100%)',
                        border: '2px solid rgba(255, 107, 53, 0.3)',
                    }}
                >
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            width: '120px',
                            height: '120px',
                            margin: '0 auto 1.5rem',
                            background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 40px rgba(255, 107, 53, 0.4)',
                        }}
                    >
                        <Users size={60} color="white" />
                    </motion.div>

                    <h2
                        className="gold-text"
                        style={{
                            fontSize: '2rem',
                            fontWeight: 800,
                            marginBottom: '1rem',
                        }}
                    >
                        Bahujan Hitay Sangh
                    </h2>

                    <p
                        style={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            marginBottom: '2rem',
                        }}
                    >
                        Join our community dedicated to empowering the Buddhist community through
                        education, healthcare, and social justice, guided by Buddha's wisdom and
                        Dr. Ambedkar's vision.
                    </p>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.8rem',
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: '0.95rem',
                            marginBottom: '2rem',
                            textAlign: 'left',
                        }}
                    >
                        <div>✅ Community Events & Festivals</div>
                        <div>✅ Educational Resources & Library</div>
                        <div>✅ Social Justice Initiatives</div>
                        <div>✅ Healthcare & Support Services</div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleVisit('https://bhspune.com')}
                        className="btn btn-gold"
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                        }}
                    >
                        Visit BHS Pune
                        <ExternalLink size={20} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Footer message */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                style={{
                    marginTop: '3rem',
                    textAlign: 'center',
                }}
            >
                <p
                    style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '1rem',
                        fontStyle: 'italic',
                    }}
                >
                    Inaugurated by Justice Kolte Patil | {new Date().toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default WebsiteReveal;
