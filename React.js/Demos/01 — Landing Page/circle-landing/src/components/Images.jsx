import { motion } from 'framer-motion';


function Images({ controls, controlsReverse, content}) {
    
    return (
        <>
            <motion.div
            className="imageCenter"
            style={{
                backgroundImage:
                `url(/images/${content}.jpg)`,
            }}
            initial={{ rotate: 0, opacity: 1 }} // Başlangıç opacity değeri ekleyin
            animate={controls} 
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
            <motion.div
            className="imageRing"
            style={{ 
                backgroundImage:
                `url(/images/${content}.jpg)`,
            }}
            initial={{ rotate: 0, opacity: 1 }}
            animate={controlsReverse}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
            <motion.div
            className="imageOuter"
            style={{
                backgroundImage:
                `url(/images/${content}.jpg)`,
            }}
            initial={{ rotate: 0, opacity: 1 }}
            animate={controls}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            ></motion.div>
        </>
    )
}

export default Images
