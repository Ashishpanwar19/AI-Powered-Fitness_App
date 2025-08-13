@@ .. @@
 import NutritionPage from './pages/NutritionPage';
 import ProgressPage from './pages/ProgressPage';
 import ProfilePage from './pages/ProfilePage';
+import SyncPage from './pages/SyncPage';
+import CommunityPage from './pages/CommunityPage';
+import ARWorkoutPage from './pages/ARWorkoutPage';

 function App() {
   return (
@@ .. @@
         <Route path="nutrition" element={<NutritionPage />} />
         <Route path="progress" element={<ProgressPage />} />
         <Route path="profile" element={<ProfilePage />} />
+        <Route path="sync" element={<SyncPage />} />
+        <Route path="community" element={<CommunityPage />} />
+        <Route path="ar-workout" element={<ARWorkoutPage />} />
       </Route>
     </Routes>
   );