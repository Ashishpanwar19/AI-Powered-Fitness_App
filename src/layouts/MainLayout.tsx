@@ .. @@
 const MainLayout: React.FC = () => {
   return (
   )
 }
-    <div className="flex flex-col min-h-screen bg-neutral-50">
+    <div className="flex flex-col min-h-screen bg-neutral-900">
       <Header />
       <main className="flex-grow">
         <Outlet />
       </main>
       <Footer />
     </div>
   );
 };