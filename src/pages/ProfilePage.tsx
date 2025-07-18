@@ .. @@
   return (
-    <div className="pt-20 pb-16">
+    <div className="pt-20 pb-16 bg-neutral-900 min-h-screen">
       <div className="container mx-auto px-4">
         <div className="max-w-6xl mx-auto">
           {/* Profile Header */}
-          <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8 shadow-sm">
+          <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 mb-8 shadow-sm">
             <div className="flex flex-col md:flex-row md:items-center">
               <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                 <div className="relative">
@@ -78,8 +78,8 @@
               </div>
               <div>
-                <h1 className="text-2xl md:text-3xl font-bold text-neutral-800">
+                <h1 className="text-2xl md:text-3xl font-bold text-white">
                   {mockUserData.name}
                 </h1>
-                <p className="text-neutral-600 mb-2">{mockUserData.email}</p>
+                <p className="text-neutral-300 mb-2">{mockUserData.email}</p>
                 <div className="flex flex-wrap gap-2">
                   <span className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full">
                     {mockUserData.fitnessLevel}
                   </span>
-                  <span className="bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full">
+                  <span className="bg-neutral-700 text-neutral-300 text-sm px-3 py-1 rounded-full">
                     Member since {mockUserData.joinDate}
                   </span>
                 </div>
@@ -102,8 +102,8 @@
               <button
                 key={index}
                 className={`py-3 px-5 font-medium transition-colors whitespace-nowrap ${
                   activeTabIndex === index 
-                    ? 'text-primary-600 border-b-2 border-primary-600' 
-                    : 'text-neutral-600 hover:text-primary-500'
+                    ? 'text-primary-400 border-b-2 border-primary-400' 
+                    : 'text-neutral-300 hover:text-primary-400'
                 }`}
                 onClick={() => setActiveTabIndex(index)}
               >
@@ -118,7 +118,7 @@
               <div className="md:col-span-2">
                 {/* Fitness Profile */}
                 <motion.div 
-                  className="bg-white border border-neutral-200 rounded-xl p-6 mb-8 shadow-sm"
+                  className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 mb-8 shadow-sm"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.3 }}
@@ -130,7 +130,7 @@
                   </h2>
                   
                   <div className="mb-6">
-                    <h3 className="text-lg font-medium mb-2">Goals</h3>
+                    <h3 className="text-lg font-medium mb-2 text-white">Goals</h3>
                     <div className="flex flex-wrap gap-2">
                       {mockUserData.goals.map((goal, index) => (
                         <span 
@@ -140,7 +140,7 @@
                           {goal}
                         </span>
                       ))}
-                      <button className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm flex items-center">
+                      <button className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-sm flex items-center">
                         Add Goal <Plus size={14} className="ml-1" />
                       </button>
                     </div>
                   </div>
                   
                   <div className="mb-6">
-                    <h3 className="text-lg font-medium mb-2">Restrictions</h3>
+                    <h3 className="text-lg font-medium mb-2 text-white">Restrictions</h3>
                     <div className="flex flex-wrap gap-2">
                       {mockUserData.restrictions.map((restriction, index) => (
                         <span 
@@ -160,12 +160,12 @@
                   </div>
                   
                   <div className="mb-6">
-                    <h3 className="text-lg font-medium mb-2">Workout Preferences</h3>
+                    <h3 className="text-lg font-medium mb-2 text-white">Workout Preferences</h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
-                      <div className="bg-neutral-50 p-3 rounded-lg">
-                        <p className="text-sm text-neutral-600 mb-1">Duration</p>
-                        <p className="font-medium">{mockUserData.preferences.workoutDuration}</p>
+                      <div className="bg-neutral-700/50 p-3 rounded-lg">
+                        <p className="text-sm text-neutral-300 mb-1">Duration</p>
+                        <p className="font-medium text-white">{mockUserData.preferences.workoutDuration}</p>
                       </div>
-                      <div className="bg-neutral-50 p-3 rounded-lg">
-                        <p className="text-sm text-neutral-600 mb-1">Preferred Days</p>
-                        <p className="font-medium">{mockUserData.preferences.preferredDays.join(', ')}</p>
+                      <div className="bg-neutral-700/50 p-3 rounded-lg">
+                        <p className="text-sm text-neutral-300 mb-1">Preferred Days</p>
+                        <p className="font-medium text-white">{mockUserData.preferences.preferredDays.join(', ')}</p>
                       </div>
-                      <div className="bg-neutral-50 p-3 rounded-lg sm:col-span-2">
-                        <p className="text-sm text-neutral-600 mb-1">Workout Types</p>
+                      <div className="bg-neutral-700/50 p-3 rounded-lg sm:col-span-2">
+                        <p className="text-sm text-neutral-300 mb-1">Workout Types</p>
                         <div className="flex flex-wrap gap-2 mt-1">
                           {mockUserData.preferences.workoutTypes.map((type, index) => (
                             <span 
@@ -190,7 +190,7 @@
                 
                 {/* Health Metrics */}
                 <motion.div 
-                  className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm"
+                  className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 shadow-sm"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.3, delay: 0.1 }}
@@ -202,27 +202,27 @@
                   </h2>
                   
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
-                    <div className="bg-neutral-50 p-4 rounded-lg">
-                      <p className="text-sm text-neutral-600 mb-1">Height</p>
-                      <p className="text-xl font-semibold">{mockUserData.healthMetrics.height} cm</p>
+                    <div className="bg-neutral-700/50 p-4 rounded-lg">
+                      <p className="text-sm text-neutral-300 mb-1">Height</p>
+                      <p className="text-xl font-semibold text-white">{mockUserData.healthMetrics.height} cm</p>
                     </div>
-                    <div className="bg-neutral-50 p-4 rounded-lg">
-                      <p className="text-sm text-neutral-600 mb-1">Weight</p>
-                      <p className="text-xl font-semibold">{mockUserData.healthMetrics.weight} kg</p>
+                    <div className="bg-neutral-700/50 p-4 rounded-lg">
+                      <p className="text-sm text-neutral-300 mb-1">Weight</p>
+                      <p className="text-xl font-semibold text-white">{mockUserData.healthMetrics.weight} kg</p>
                     </div>
-                    <div className="bg-neutral-50 p-4 rounded-lg">
-                      <p className="text-sm text-neutral-600 mb-1">BMI</p>
-                      <p className="text-xl font-semibold">{mockUserData.healthMetrics.bmi}</p>
+                    <div className="bg-neutral-700/50 p-4 rounded-lg">
+                      <p className="text-sm text-neutral-300 mb-1">BMI</p>
+                      <p className="text-xl font-semibold text-white">{mockUserData.healthMetrics.bmi}</p>
                     </div>
-                    <div className="bg-neutral-50 p-4 rounded-lg">
-                      <p className="text-sm text-neutral-600 mb-1">Resting Heart Rate</p>
-                      <p className="text-xl font-semibold">{mockUserData.healthMetrics.restingHeartRate} bpm</p>
+                    <div className="bg-neutral-700/50 p-4 rounded-lg">
+                      <p className="text-sm text-neutral-300 mb-1">Resting Heart Rate</p>
+                      <p className="text-xl font-semibold text-white">{mockUserData.healthMetrics.restingHeartRate} bpm</p>
                     </div>
-                    <div className="bg-neutral-50 p-4 rounded-lg">
-                      <p className="text-sm text-neutral-600 mb-1">Avg. Sleep</p>
-                      <p className="text-xl font-semibold">{mockUserData.healthMetrics.sleepAvg} hours</p>
+                    <div className="bg-neutral-700/50 p-4 rounded-lg">
+                      <p className="text-sm text-neutral-300 mb-1">Avg. Sleep</p>
+                      <p className="text-xl font-semibold text-white">{mockUserData.healthMetrics.sleepAvg} hours</p>
                     </div>
                   </div>
                   
@@ -240,7 +240,7 @@
               {/* Settings Shortcuts */}
               <div>
                 <motion.div 
-                  className="bg-white border border-neutral-200 rounded-xl shadow-sm"
+                  className="bg-neutral-800 border border-neutral-700 rounded-xl shadow-sm"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.3, delay: 0.2 }}
                 >
                   <div className="p-4 border-b border-neutral-200">
-                    <h2 className="font-semibold text-lg">Quick Settings</h2>
+                    <h2 className="font-semibold text-lg text-white">Quick Settings</h2>
                   </div>
                   <div>
                     {settingsOptions.map((option, index) => (
                       <a 
                         key={index}
                         href={option.link}
-                        className="flex items-center justify-between p-4 hover:bg-neutral-50 border-b border-neutral-100 last:border-0 transition-colors"
+                        className="flex items-center justify-between p-4 hover:bg-neutral-700/50 border-b border-neutral-700 last:border-0 transition-colors"
                       >
                         <div className="flex items-center">
                           <div className="mr-3">{option.icon}</div>
                           <div>
-                            <h3 className="font-medium text-neutral-800">{option.title}</h3>
-                            <p className="text-sm text-neutral-600">{option.description}</p>
+                            <h3 className="font-medium text-white">{option.title}</h3>
+                            <p className="text-sm text-neutral-300">{option.description}</p>
                           </div>
                         </div>
                         <ChevronRight size={18} className="text-neutral-400" />
@@ -270,7 +270,7 @@
 
                 <motion.div 
-                  className="mt-6 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-6 text-white"
+                  className="mt-6 bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-xl p-6 text-white border border-neutral-600"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.3, delay: 0.3 }}
@@ -282,7 +282,7 @@
                   <Button 
                     variant="secondary" 
-                    className="w-full bg-white text-primary-700 hover:bg-white/90"
+                    className="w-full bg-primary-600 text-white hover:bg-primary-700 border-0"
                   >
                     <Lock size={16} className="mr-2" />
                     Privacy Settings
@@ -296,8 +296,8 @@
           {/* Other tabs would be implemented here */}
           {activeTabIndex > 0 && (
-            <div className="bg-white border border-neutral-200 rounded-xl p-8 text-center">
-              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
-              <p className="text-neutral-600 mb-6">This feature is under development and will be available shortly.</p>
+            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-8 text-center">
+              <h3 className="text-xl font-semibold mb-4 text-white">Coming Soon</h3>
+              <p className="text-neutral-300 mb-6">This feature is under development and will be available shortly.</p>
               <Button 
                 variant="outline" 
                 onClick={() => setActiveTabIndex(0)}