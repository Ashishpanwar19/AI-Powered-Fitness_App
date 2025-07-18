@@ .. @@
            calories: 320,
            protein: 12,
            carbs: 58,
            fat: 6,
            image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          },
          {
            id: 'eggs',
            name: 'Scrambled Eggs',
            calories: 180,
            protein: 14,
            carbs: 2,
            fat: 12,
            image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }

  return (
    <div className="pt-20 pb-16 bg-neutral-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Nutrition & Meal Planning
          </h1>
          <p className="text-lg text-neutral-300 mb-8">
            Personalized meal plans based on your fitness goals, preferences, and biological data.
          </p>

@@ -158,8 +158,8 @@
              <button
                key={index}
                className={`py-3 px-5 font-medium transition-colors ${
                  activeTabIndex === index 
                    ? 'text-primary-400 border-b-2 border-primary-400' 
                    : 'text-neutral-300 hover:text-primary-400'
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
@@ -173,7 +173,7 @@
            <div>
              {/* Nutrition Summary */}
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 mb-8 shadow-sm">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-1 text-white">Today's Nutrition</h2>
                    <p className="text-neutral-300">{today.date}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Button variant="primary">
@@ -188,9 +188,9 @@

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-neutral-700/50 p-4 rounded-lg">
                    <p className="text-neutral-300 text-sm mb-1">Calories</p>
                    <p className="text-2xl font-semibold text-white">
                      {dailyTotals.calories}
                      <span className="text-sm text-neutral-400 font-normal ml-1">kcal</span>
                    </p>
                    <div className="mt-2 h-2 bg-neutral-600 rounded-full">
                      <div 
                        className="h-2 bg-primary-500 rounded-full" 
                        style={{ width: `${Math.min((dailyTotals.calories / 2200) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">Daily goal: 2,200 kcal</p>
                  </div>
                  
                  <div className="bg-neutral-700/50 p-4 rounded-lg">
                    <p className="text-neutral-300 text-sm mb-1">Protein</p>
                    <p className="text-2xl font-semibold text-white">
                      {dailyTotals.protein}
                      <span className="text-sm text-neutral-400 font-normal ml-1">g</span>
                    </p>
                    <div className="mt-2 h-2 bg-neutral-600 rounded-full">
                      <div 
                        className="h-2 bg-secondary-500 rounded-full" 
                        style={{ width: `${Math.min((dailyTotals.protein / 140) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">Daily goal: 140g ({proteinPercentage}%)</p>
                  </div>
                  
                  <div className="bg-neutral-700/50 p-4 rounded-lg">
                    <p className="text-neutral-300 text-sm mb-1">Carbs</p>
                    <p className="text-2xl font-semibold text-white">
                      {dailyTotals.carbs}
                      <span className="text-sm text-neutral-400 font-normal ml-1">g</span>
                    </p>
                    <div className="mt-2 h-2 bg-neutral-600 rounded-full">
                      <div 
                        className="h-2 bg-accent-500 rounded-full" 
                        style={{ width: `${Math.min((dailyTotals.carbs / 200) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">Daily goal: 200g ({carbsPercentage}%)</p>
                  </div>
                  
                  <div className="bg-neutral-700/50 p-4 rounded-lg">
                    <p className="text-neutral-300 text-sm mb-1">Fat</p>
                    <p className="text-2xl font-semibold text-white">
                      {dailyTotals.fat}
                      <span className="text-sm text-neutral-400 font-normal ml-1">g</span>
                    </p>
                    <div className="mt-2 h-2 bg-neutral-600 rounded-full">
                      <div 
                        className="h-2 bg-warning-500 rounded-full" 
                        style={{ width: `${Math.min((dailyTotals.fat / 70) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">Daily goal: 70g ({fatPercentage}%)</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-neutral-300">
                    <span className="font-medium">Water intake:</span> 1.2L of 2.5L
                  </p>
                  <button className="text-primary-400 font-medium flex items-center">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
@@ -268,7 +268,7 @@
                {today.meals.map((meal) => (
                  <motion.div 
                    key={meal.id}
                    className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
@@ -283,8 +283,8 @@
                        {meal.id === 'dinner' && <Pizza size={20} className="text-primary-600 mr-3" />}
                        <div>
                          <h4 className="font-medium text-white">{meal.name}</h4>
                          <p className="text-sm text-neutral-400">{meal.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-4 text-neutral-300">
                          {meal.items.reduce((sum, item) => sum + item.calories, 0)} kcal
                        </span>
                        <ChevronDown 
                          size={20} 
                          className={`text-neutral-400 transition-transform ${
                            expandedMeal === meal.id ? 'rotate-180' : ''
                          }`} 
                        />
@@ -303,7 +303,7 @@
                    {/* Expanded Meal Details */}
                    {expandedMeal === meal.id && (
                      <motion.div 
                        className="border-t border-neutral-700 p-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
@@ -313,7 +313,7 @@
                            <div 
                              key={item.id} 
                              className="flex items-center bg-neutral-700/50 p-3 rounded-lg"
                            >
                              <img 
                                src={item.image} 
@@ -321,9 +321,9 @@
                                className="w-16 h-16 object-cover rounded-md"
                              />
                              <div className="ml-4 flex-grow">
                                <h6 className="font-medium text-white">{item.name}</h6>
                                <p className="text-sm text-neutral-300">
                                  {item.calories} kcal • P: {item.protein}g • C: {item.carbs}g • F: {item.fat}g
                                </p>
                              </div>
                              <button className="text-neutral-500 hover:text-neutral-300 p-1">
                                <Plus size={20} />
                              </button>
                            </div>
@@ -331,7 +331,7 @@
                        </div>
                        
                        <button className="mt-4 w-full text-primary-400 font-medium border border-primary-600 rounded-lg py-2 hover:bg-primary-900/20 transition-colors">
                          Add Food to {meal.name}
                        </button>
                      </motion.div>
@@ -342,9 +342,9 @@

              {/* AI Recommendations */}
              <div className="bg-neutral-800/50 border border-neutral-600 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">Personalized Recommendations</h3>
                <p className="text-neutral-300 mb-4">
                  Based on your workout schedule and goals, our AI suggests these nutrition adjustments:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Beef size={18} className="text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-300">Increase protein intake by 20g on strength training days</span>
                  </li>
                  <li className="flex items-start">
                    <Apple size={18} className="text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-300">Add more complex carbs before your morning workouts</span>
                  </li>
                  <li className="flex items-start">
                    <Egg size={18} className="text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-300">Consider omega-3 supplements based on your microbiome analysis</span>
                  </li>
                </ul>
                <Button variant="secondary">
@@ -369,7 +369,7 @@
          {/* Other tabs would be implemented here */}
          {activeTabIndex > 0 && (
            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-white">Coming Soon</h3>
              <p className="text-neutral-300 mb-6">This feature is under development and will be available shortly.</p>
              <Button 
                variant="outline" 
                onClick={() => setActiveTabIndex(0)}