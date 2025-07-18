@@ .. @@
   return (
-    <div className="pt-20 pb-16">
+    <div className="pt-20 pb-16 bg-neutral-900 min-h-screen">
       <div className="container mx-auto px-4">
         <div className="max-w-4xl mx-auto">
-          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-neutral-800">
+          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
             AI Exercise Form Analysis
           </h1>
-          <p className="text-lg text-neutral-600 mb-8">
+          <p className="text-lg text-neutral-300 mb-8">
             Get real-time feedback on your exercise form using our advanced AI analysis.
           </p>
 
           {/* Exercise Selection */}
           <div className="mb-8 relative">
-            <label className="block text-neutral-700 font-medium mb-2">
+            <label className="block text-neutral-300 font-medium mb-2">
               Select Exercise
             </label>
             <div className="relative">
               <button
-                className="w-full bg-white border border-neutral-300 rounded-lg py-3 px-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primary-500"
+                className="w-full bg-neutral-800 border border-neutral-600 rounded-lg py-3 px-4 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                 onClick={() => setShowDropdown(!showDropdown)}
               >
                 <span>{exercises.find(ex => ex.id === selectedExercise)?.name || 'Select Exercise'}</span>
@@ -85,7 +85,7 @@
               </button>
 
               {showDropdown && (
-                <div className="absolute z-10 w-full mt-1 bg-white border border-neutral-200 rounded-lg shadow-lg">
+                <div className="absolute z-10 w-full mt-1 bg-neutral-800 border border-neutral-600 rounded-lg shadow-lg">
                   {exercises.map(exercise => (
                     <button
                       key={exercise.id}
-                      className="w-full text-left px-4 py-2 hover:bg-neutral-50 transition-colors"
+                      className="w-full text-left px-4 py-2 hover:bg-neutral-700 transition-colors text-white"
                       onClick={() => {
                         setSelectedExercise(exercise.id);
                         setShowDropdown(false);
@@ -104,7 +104,7 @@
 
           {/* Camera View with AI Analysis */}
-          <div className="bg-neutral-100 rounded-xl overflow-hidden mb-6 relative">
+          <div className="bg-neutral-800 rounded-xl overflow-hidden mb-6 relative border border-neutral-700">
             {isAnalyzing ? (
               <PoseDetection
                 exerciseType={exercises.find(ex => ex.id === selectedExercise)?.name}
@@ -112,10 +112,10 @@
               />
             ) : (
-              <div className="aspect-w-16 aspect-h-9 bg-neutral-200">
+              <div className="aspect-w-16 aspect-h-9 bg-neutral-800">
                 <div className="flex items-center justify-center">
                   <div className="text-center p-8">
-                    <Camera size={64} className="mx-auto text-neutral-400 mb-4" />
-                    <p className="text-neutral-600 mb-4">
+                    <Camera size={64} className="mx-auto text-neutral-500 mb-4" />
+                    <p className="text-neutral-300 mb-4">
                       Turn on your camera to analyze your {selectedExercise} form
                     </p>
                     <Button
@@ -165,7 +165,7 @@
 
           {/* Recent Feedback History */}
           {metrics.feedback.length > 0 && (
-            <div className="bg-white border border-neutral-200 rounded-xl p-4 mb-6">
+            <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-4 mb-6">
-              <h3 className="font-semibold mb-2">Recent Feedback</h3>
+              <h3 className="font-semibold mb-2 text-white">Recent Feedback</h3>
               <div className="space-y-2">
                 {metrics.feedback.map((feedback, index) => (
-                  <p key={index} className="text-sm text-neutral-600">{feedback}</p>
+                  <p key={index} className="text-sm text-neutral-300">{feedback}</p>
                 ))}
               </div>
             </div>
@@ -177,9 +177,9 @@
 
           {/* Exercise Tips */}
-          <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
-            <h2 className="text-xl font-semibold mb-4">
+          <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 shadow-sm">
+            <h2 className="text-xl font-semibold mb-4 text-white">
               {exercises.find(ex => ex.id === selectedExercise)?.name} Form Tips
             </h2>
             
@@ -192,7 +192,7 @@
               ].map((tip, index) => (
                 <li key={index} className="flex items-start gap-2">
                   <Check size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
-                  <span>{tip}</span>
+                  <span className="text-neutral-300">{tip}</span>
                 </li>
               ))}
               
@@ -205,4 +205,4 @@
   );
 };
 
-export default ExercisePage;