@@ .. @@
          name: 'Squats',
          sets: 3,
          reps: 12,
          restSeconds: 60,
          image: 'https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          id: 'ex2',
          name: 'Push-ups',
          sets: 3,
          reps: 10,
          restSeconds: 60,
          image: 'https://images.pexels.com/photos/6456283/pexels-photo-6456283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
          id: 'ex3',
          name: 'Plank',
          sets: 3,
          reps: 30,
          restSeconds: 45,
          image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }

  return (
    <div className="pt-20 pb-16 bg-neutral-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Your Workout Plans
          </h1>
          <p className="text-lg text-neutral-300 mb-8">
            Personalized training plans that adapt to your progress and recovery.
          </p>

@@ -75,7 +75,7 @@
              <button
                key={index}
                className={`py-3 px-5 font-medium transition-colors ${
                  activeTabIndex === index 
                    ? 'text-primary-400 border-b-2 border-primary-400' 
                    : 'text-neutral-300 hover:text-primary-400'
                }`}
                onClick={() => setActiveTabIndex(index)}
              >
@@ -89,7 +89,7 @@
            <div>
              {/* Plan Header */}
              <div className="bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-xl p-6 text-white mb-8 border border-neutral-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <div className="flex items-center">
@@ -97,7 +97,7 @@
                      <h2 className="text-xl font-semibold">Beginner Fitness Plan</h2>
                    </div>
                    <p className="mt-2 text-primary-100">
                      Personalized for your fitness level and goals
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
                    <div className="bg-neutral-700/50 rounded-lg px-4 py-2 flex items-center">
                      <Calendar size={18} className="mr-2 text-primary-400" />
                      <span>Week 2 of 4</span>
                    </div>
                    <div className="bg-neutral-700/50 rounded-lg px-4 py-2 flex items-center">
                      <BarChart size={18} className="mr-2 text-primary-400" />
                      <span>75% Complete</span>
                    </div>
                  </div>
@@ -115,7 +115,7 @@

              {/* Weekly Schedule */}
              <h3 className="text-xl font-semibold mb-4 text-white">
                This Week's Workouts
              </h3>
              
@@ -123,7 +123,7 @@
                {workoutDays.map((workout) => (
                  <motion.div 
                    key={workout.id}
                    className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
@@ -135,13 +135,13 @@
                      >
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                            {workout.day.slice(0, 3)}
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-white">{workout.name}</h4>
                            <div className="flex items-center text-sm text-neutral-400">
                              <Clock size={14} className="mr-1" />
                              <span>{workout.duration} min</span>
                              <span className="mx-2">•</span>
                              <span>{workout.intensity} Intensity</span>
                            </div>
@@ -165,7 +165,7 @@
                    {/* Expanded Workout Details */}
                    {expandedWorkout === workout.id && (
                      <motion.div 
                        className="border-t border-neutral-700 p-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        <h5 className="font-medium text-neutral-300 mb-3">Exercises</h5>
                        <div className="grid gap-3">
                          {workout.exercises.map((exercise) => (
                            <div 
                              key={exercise.id} 
                              className="flex items-center bg-neutral-700/50 p-3 rounded-lg"
                            >
                              <img 
                                src={exercise.image} 
@@ -183,9 +183,9 @@
                                className="w-16 h-16 object-cover rounded-md"
                              />
                              <div className="ml-4 flex-grow">
                                <h6 className="font-medium text-white">{exercise.name}</h6>
                                <p className="text-sm text-neutral-300">
                                  {exercise.sets} sets × {exercise.reps} reps • {exercise.restSeconds}s rest
                                </p>
                              </div>
                              <button className="text-primary-400 hover:text-primary-300">
                                <ChevronRight size={20} />
                              </button>
                            </div>
@@ -204,9 +204,9 @@

              {/* Suggestions/Tips */}
              <div className="bg-neutral-800/50 border border-neutral-600 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">AI Suggestions</h3>
                <p className="text-neutral-300 mb-4">
                  Based on your sleep data and recovery metrics, we recommend adjusting today's workout intensity.
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button variant="secondary">
                    Apply Recommendations
                  </Button>
                  <Button variant="outline" className="border-neutral-600 text-neutral-300 hover:bg-neutral-700">
                    View Details
                  </Button>
                </div>