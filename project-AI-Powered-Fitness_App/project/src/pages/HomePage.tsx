import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Dumbbell, 
  Activity, 
  Utensils, 
  Trophy, 
  Camera, 
  Brain, 
  ShieldCheck, 
  Award 
} from 'lucide-react';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Your AI-Powered <br />
                <span className="text-accent-300">Fitness Coach</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl mb-8 text-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Train smarter with biomechanical analysis, personalized plans, and real-time form correction.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-white text-primary-700 hover:bg-neutral-100"
                >
                  <Camera size={18} className="mr-2" />
                  Analyze My Form
                </Button>
                <Link to="/workout">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Dumbbell size={18} className="mr-2" />
                    View Workouts
                  </Button>
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src="https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Person exercising with AI form analysis"
                  className="rounded-lg shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-success-100 p-2 rounded-full">
                      <ShieldCheck className="text-success-600" size={24} />
                    </div>
                    <div>
                      <p className="text-neutral-800 font-medium">Form Analysis</p>
                      <p className="text-success-600 font-semibold">97% Accurate</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
              Intelligent Fitness Features
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our AI-powered platform adapts to your unique body, goals, and limitations to deliver a truly personalized fitness experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Camera className="text-primary-600\" size={32} />,
                title: "Real-time Form Analysis",
                description: "Get instant feedback on your exercise form using advanced biomechanical analysis."
              },
              {
                icon: <Brain className="text-primary-600" size={32} />,
                title: "Adaptive Workouts",
                description: "Workouts that adjust based on your stress levels, sleep quality, and recovery status."
              },
              {
                icon: <ShieldCheck className="text-primary-600\" size={32} />,
                title: "Injury Prevention",
                description: "Our medical rule engine blocks unsafe exercises based on your profile and limitations."
              },
              {
                icon: <Utensils className="text-primary-600" size={32} />,
                title: "Smart Nutrition",
                description: "Personalized meal plans based on your goals, preferences, and biological data."
              },
              {
                icon: <Activity className="text-primary-600\" size={32} />,
                title: "Progress Tracking",
                description: "Visualize your fitness journey with detailed metrics and analytics."
              },
              {
                icon: <Award className="text-primary-600" size={32} />,
                title: "NFT Achievements",
                description: "Earn unique digital badges as you reach your fitness milestones."
              },
              {
                icon: <Dumbbell className="text-primary-600\" size={32} />,
                title: "Custom Exercise Library",
                description: "Access a vast library of exercises tailored to your equipment and fitness level."
              },
              {
                icon: <Trophy className="text-primary-600" size={32} />,
                title: "Goal Setting",
                description: "Set and track personalized fitness goals with AI-guided recommendations."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-neutral-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-neutral-800">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
              How It Works
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Our intelligent fitness platform uses cutting-edge AI to analyze, adapt, and guide your fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Analyze Your Form",
                description: "Our AI camera analyzes your movements in real-time, providing instant feedback to improve your form and prevent injuries.",
                image: "https://images.pexels.com/photos/4148906/pexels-photo-4148906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                step: "02",
                title: "Adapt Your Workouts",
                description: "We adjust your training based on your stress levels, sleep quality, and recovery status for optimal results.",
                image: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                step: "03",
                title: "Track Your Progress",
                description: "Visualize your improvements over time and earn NFT badges as you reach milestones in your fitness journey.",
                image: "https://images.pexels.com/photos/3912952/pexels-photo-3912952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                </div>
                <div className="bg-white p-6 rounded-b-xl">
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-3">
                    Step {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Fitness Journey?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-neutral-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of users who have revolutionized their workouts with our AI-powered fitness coach.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white text-primary-700 hover:bg-neutral-100"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;