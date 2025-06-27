import React, { useState } from 'react';
import { 
  Utensils, 
  ChevronDown, 
  BarChart, 
  ArrowRight, 
  Plus, 
  Pizza, 
  Coffee, 
  Apple, 
  Beef,
  Egg
} from 'lucide-react';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

interface MealItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image: string;
}

interface MealPlan {
  id: string;
  day: string;
  date: string;
  meals: {
    id: string;
    name: string;
    time: string;
    items: MealItem[];
  }[];
}

const NutritionPage: React.FC = () => {
  const [expandedMeal, setExpandedMeal] = useState<string | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const toggleMealExpand = (id: string) => {
    setExpandedMeal(expandedMeal === id ? null : id);
  };

  const today: MealPlan = {
    id: 'today',
    day: 'Today',
    date: 'April 15, 2025',
    meals: [
      {
        id: 'breakfast',
        name: 'Breakfast',
        time: '7:30 AM',
        items: [
          {
            id: 'oatmeal',
            name: 'Oatmeal with Berries',
            calories: 320,
            protein: 12,
            carbs: 58,
            fat: 6,
            image: 'https://images.pexels.com/photos/216951/pexels-photo-216951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
          {
            id: 'eggs',
            name: 'Scrambled Eggs',
            calories: 180,
            protein: 14,
            carbs: 2,
            fat: 12,
            image: 'https://images.pexels.com/photos/6294248/pexels-photo-6294248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ]
      },
      {
        id: 'lunch',
        name: 'Lunch',
        time: '12:30 PM',
        items: [
          {
            id: 'salad',
            name: 'Grilled Chicken Salad',
            calories: 420,
            protein: 35,
            carbs: 20,
            fat: 22,
            image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ]
      },
      {
        id: 'snack',
        name: 'Snack',
        time: '3:30 PM',
        items: [
          {
            id: 'yogurt',
            name: 'Greek Yogurt with Honey',
            calories: 150,
            protein: 15,
            carbs: 12,
            fat: 3,
            image: 'https://images.pexels.com/photos/992817/pexels-photo-992817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
          {
            id: 'almonds',
            name: 'Almonds (1oz)',
            calories: 160,
            protein: 6,
            carbs: 6,
            fat: 14,
            image: 'https://images.pexels.com/photos/6659192/pexels-photo-6659192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ]
      },
      {
        id: 'dinner',
        name: 'Dinner',
        time: '7:00 PM',
        items: [
          {
            id: 'salmon',
            name: 'Baked Salmon',
            calories: 280,
            protein: 30,
            carbs: 0,
            fat: 16,
            image: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
          {
            id: 'rice',
            name: 'Brown Rice',
            calories: 220,
            protein: 5,
            carbs: 46,
            fat: 2,
            image: 'https://images.pexels.com/photos/4412925/pexels-photo-4412925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
          {
            id: 'vegetables',
            name: 'Steamed Vegetables',
            calories: 80,
            protein: 3,
            carbs: 15,
            fat: 1,
            image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
        ]
      }
    ]
  };

  // Calculate daily totals
  const dailyTotals = today.meals.reduce(
    (totals, meal) => {
      meal.items.forEach(item => {
        totals.calories += item.calories;
        totals.protein += item.protein;
        totals.carbs += item.carbs;
        totals.fat += item.fat;
      });
      return totals;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  // Macro percentages
  const proteinPercentage = Math.round((dailyTotals.protein * 4 / dailyTotals.calories) * 100);
  const carbsPercentage = Math.round((dailyTotals.carbs * 4 / dailyTotals.calories) * 100);
  const fatPercentage = Math.round((dailyTotals.fat * 9 / dailyTotals.calories) * 100);

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-neutral-800">
            Nutrition & Meal Planning
          </h1>
          <p className="text-lg text-neutral-600 mb-8">
            Personalized meal plans based on your fitness goals, preferences, and biological data.
          </p>

          {/* Tabs */}
          <div className="flex border-b border-neutral-200 mb-8">
            {['Meal Plan', 'Log Food', 'Recipes', 'Analysis'].map((tab, index) => (
              <button
                key={index}
                className={`py-3 px-5 font-medium transition-colors ${
                  activeTabIndex === index 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Meal Plan Tab */}
          {activeTabIndex === 0 && (
            <div>
              {/* Nutrition Summary */}
              <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-1 text-neutral-800">Today's Nutrition</h2>
                    <p className="text-neutral-600">{today.date}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Button variant="primary">
                      <Plus size={18} className="mr-2" />
                      Log Food
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-600 text-sm mb-1">Calories</p>
                    <p className="text-2xl font-semibold text-neutral-800">
                      {dailyTotals.calories}
                      <span className="text-sm text-neutral-500 font-normal ml-1">kcal</span>
                    </p>
                    <div className="mt-2 h-2 bg-neutral-200 rounded-full">
                      <div 
                        className="h-2 bg-primary-500 rounded-full" 
                        style={{ width: `${Math.min((dailyTotals.calories / 2200) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">Daily goal: 2,200 kcal</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-600 text-sm mb-1">Protein</p>
                    <p className="text-2xl font-semibold text-neutral-800">
                      {dailyTotals.protein}
                      <span className="text-sm text-neutral-500 font-normal ml-1">g</span>
                    </p>
                    <div className="mt-2 h-2 bg-neutral-200 rounded-full">
                      <div 
                        className="h-2 bg-secondary-500 rounded-full" 
                        style={{ width: `${Math.min((dailyTotals.protein / 140) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">Daily goal: 140g ({proteinPercentage}%)</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-600 text-sm mb-1">Carbs</p>
                    <p className="text-2xl font-semibold text-neutral-800">
                      {dailyTotals.carbs}
                      <span className="text-sm text-neutral-500 font-normal ml-1">g</span>
                    </p>
                    <div className="mt-2 h-2 bg-neutral-200 rounded-full">
                      <div 
                        className="h-2 bg-accent-500 rounded-full" 
                        style={{ width: `${Math.min((dailyTotals.carbs / 200) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">Daily goal: 200g ({carbsPercentage}%)</p>
                  </div>
                  
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-neutral-600 text-sm mb-1">Fat</p>
                    <p className="text-2xl font-semibold text-neutral-800">
                      {dailyTotals.fat}
                      <span className="text-sm text-neutral-500 font-normal ml-1">g</span>
                    </p>
                    <div className="mt-2 h-2 bg-neutral-200 rounded-full">
                      <div 
                        className="h-2 bg-warning-500 rounded-full" 
                        style={{ width: `${Math.min((dailyTotals.fat / 70) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-neutral-500 mt-1">Daily goal: 70g ({fatPercentage}%)</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-neutral-600">
                    <span className="font-medium">Water intake:</span> 1.2L of 2.5L
                  </p>
                  <button className="text-primary-600 font-medium flex items-center">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
              
              {/* Meals */}
              <div className="grid gap-4 mb-8">
                {today.meals.map((meal) => (
                  <motion.div 
                    key={meal.id}
                    className="bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="p-4 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleMealExpand(meal.id)}
                    >
                      <div className="flex items-center">
                        {meal.id === 'breakfast' && <Coffee size={20} className="text-primary-600 mr-3" />}
                        {meal.id === 'lunch' && <Utensils size={20} className="text-primary-600 mr-3" />}
                        {meal.id === 'snack' && <Apple size={20} className="text-primary-600 mr-3" />}
                        {meal.id === 'dinner' && <Pizza size={20} className="text-primary-600 mr-3" />}
                        <div>
                          <h4 className="font-medium text-neutral-800">{meal.name}</h4>
                          <p className="text-sm text-neutral-500">{meal.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-4 text-neutral-700">
                          {meal.items.reduce((sum, item) => sum + item.calories, 0)} kcal
                        </span>
                        <ChevronDown 
                          size={20} 
                          className={`text-neutral-500 transition-transform ${
                            expandedMeal === meal.id ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </div>
                    
                    {/* Expanded Meal Details */}
                    {expandedMeal === meal.id && (
                      <motion.div 
                        className="border-t border-neutral-200 p-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid gap-3">
                          {meal.items.map((item) => (
                            <div 
                              key={item.id} 
                              className="flex items-center bg-neutral-50 p-3 rounded-lg"
                            >
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-16 h-16 object-cover rounded-md"
                              />
                              <div className="ml-4 flex-grow">
                                <h6 className="font-medium text-neutral-800">{item.name}</h6>
                                <p className="text-sm text-neutral-600">
                                  {item.calories} kcal • P: {item.protein}g • C: {item.carbs}g • F: {item.fat}g
                                </p>
                              </div>
                              <button className="text-neutral-400 hover:text-neutral-700 p-1">
                                <Plus size={20} />
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        <button className="mt-4 w-full text-primary-600 font-medium border border-primary-200 rounded-lg py-2 hover:bg-primary-50 transition-colors">
                          Add Food to {meal.name}
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* AI Recommendations */}
              <div className="bg-secondary-50 border border-secondary-100 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">Personalized Recommendations</h3>
                <p className="text-neutral-700 mb-4">
                  Based on your workout schedule and goals, our AI suggests these nutrition adjustments:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Beef size={18} className="text-secondary-700 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Increase protein intake by 20g on strength training days</span>
                  </li>
                  <li className="flex items-start">
                    <Apple size={18} className="text-secondary-700 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Add more complex carbs before your morning workouts</span>
                  </li>
                  <li className="flex items-start">
                    <Egg size={18} className="text-secondary-700 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Consider omega-3 supplements based on your microbiome analysis</span>
                  </li>
                </ul>
                <Button variant="secondary">
                  Apply to Meal Plan
                </Button>
              </div>
            </div>
          )}
          
          {/* Other tabs would be implemented here */}
          {activeTabIndex > 0 && (
            <div className="bg-white border border-neutral-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-neutral-600 mb-6">This feature is under development and will be available shortly.</p>
              <Button 
                variant="outline" 
                onClick={() => setActiveTabIndex(0)}
              >
                Return to Meal Plan
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;