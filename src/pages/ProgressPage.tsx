@@ .. @@
   return (
-    <div className="pt-20 pb-16">
+    <div className="pt-20 pb-16 bg-neutral-900 min-h-screen">
       <div className="container mx-auto px-4">
         <div className="max-w-6xl mx-auto">
-          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-neutral-800">
+          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
             Your Progress
           </h1>
-          <p className="text-lg text-neutral-600 mb-8">
+          <p className="text-lg text-neutral-300 mb-8">
             Track your fitness journey, achievements, and key metrics.
           </p>
 
@@ -108,8 +108,8 @@
               <button
                 key={index}
                 className={`py-3 px-5 font-medium transition-colors ${
                   activeTabIndex === index 
-                    ? 'text-primary-600 border-b-2 border-primary-600' 
-                    : 'text-neutral-600 hover:text-primary-500'
+                    ? 'text-primary-400 border-b-2 border-primary-400' 
+                    : 'text-neutral-300 hover:text-primary-400'
                 }`}
                 onClick={() => setActiveTabIndex(index)}
               >
@@ -125,7 +125,7 @@
                 {statsData.map((stat, index) => (
                   <motion.div 
                     key={index}
-                    className="bg-white border border-neutral-200 rounded-lg p-4 shadow-sm"
+                    className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 shadow-sm"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.3, delay: index * 0.1 }}
                   >
                     <div className="flex items-center justify-between mb-2">
-                      <h3 className="text-neutral-600 font-medium">{stat.title}</h3>
+                      <h3 className="text-neutral-300 font-medium">{stat.title}</h3>
                       {stat.icon}
                     </div>
-                    <p className="text-2xl font-bold text-neutral-800 mb-1">{stat.value}</p>
+                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                     <p className={`text-sm ${
                       stat.changeType === 'positive' ? 'text-success-600' : 'text-error-600'
                     }`}>
@@ -146,7 +146,7 @@
 
               {/* Weight Chart */}
-              <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8 shadow-sm">
+              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 mb-8 shadow-sm">
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                   <div>
-                    <h2 className="text-xl font-semibold mb-1 text-neutral-800">Weight Progress</h2>
-                    <p className="text-neutral-600">Track your weight changes over time</p>
+                    <h2 className="text-xl font-semibold mb-1 text-white">Weight Progress</h2>
+                    <p className="text-neutral-300">Track your weight changes over time</p>
                   </div>
                   <div className="mt-3 sm:mt-0">
-                    <div className="flex border border-neutral-200 rounded-lg overflow-hidden">
+                    <div className="flex border border-neutral-600 rounded-lg overflow-hidden">
                       {['week', 'month', 'year'].map(range => (
                         <button
                           key={range}
                           className={`py-1 px-3 text-sm ${
                             timeRange === range 
-                              ? 'bg-primary-100 text-primary-700' 
-                              : 'bg-white text-neutral-600 hover:bg-neutral-50'
+                              ? 'bg-primary-600 text-white' 
+                              : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
                           }`}
                           onClick={() => setTimeRange(range)}
                         >
@@ -174,7 +174,7 @@
 
               {/* Strength Progress Chart */}
-              <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8 shadow-sm">
+              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 mb-8 shadow-sm">
                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                   <div>
-                    <h2 className="text-xl font-semibold mb-1 text-neutral-800">Strength Progress</h2>
-                    <p className="text-neutral-600">Track your strength gains for key exercises</p>
+                    <h2 className="text-xl font-semibold mb-1 text-white">Strength Progress</h2>
+                    <p className="text-neutral-300">Track your strength gains for key exercises</p>
                   </div>
                 </div>
                 <div className="h-[300px]">
@@ -188,10 +188,10 @@
 
               {/* Recent Achievements */}
-              <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
+              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 shadow-sm">
                 <div className="flex justify-between items-center mb-4">
-                  <h2 className="text-xl font-semibold text-neutral-800">Recent Achievements</h2>
-                  <button className="text-primary-600 font-medium">View All</button>
+                  <h2 className="text-xl font-semibold text-white">Recent Achievements</h2>
+                  <button className="text-primary-400 font-medium">View All</button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   {achievements.map((achievement, index) => (
                     <motion.div 
                       key={achievement.id}
-                      className="border border-neutral-200 rounded-lg overflow-hidden"
+                      className="border border-neutral-700 rounded-lg overflow-hidden bg-neutral-700/30"
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
@@ -207,7 +207,7 @@
                           alt={achievement.title} 
                           className="w-full h-full object-cover"
                         />
-                        <div className="absolute top-2 right-2 bg-white/90 rounded-full px-3 py-1 text-xs font-medium text-primary-700">
+                        <div className="absolute top-2 right-2 bg-neutral-900/90 rounded-full px-3 py-1 text-xs font-medium text-primary-400">
                           {achievement.nftId}
                         </div>
                       </div>
                       <div className="p-4">
                         <div className="flex items-center mb-2">
                           {achievement.icon}
-                          <h3 className="ml-2 font-semibold text-neutral-800">{achievement.title}</h3>
+                          <h3 className="ml-2 font-semibold text-white">{achievement.title}</h3>
                         </div>
-                        <p className="text-sm text-neutral-600 mb-2">{achievement.description}</p>
-                        <p className="text-xs text-neutral-500">Earned on {achievement.date}</p>
+                        <p className="text-sm text-neutral-300 mb-2">{achievement.description}</p>
+                        <p className="text-xs text-neutral-400">Earned on {achievement.date}</p>
                       </div>
                     </motion.div>
                   ))}
@@ -230,8 +230,8 @@
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