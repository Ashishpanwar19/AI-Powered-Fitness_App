@@ .. @@
                <img 
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Person exercising with AI form analysis"
                  className="rounded-lg shadow-2xl w-full"
                />
@@ .. @@
             {[
              "Keep your chest up and back straight",
              "Push your knees outward in line with your toes",
             "Lower until your thighs are parallel to the ground",
              "Keep your weight in your heels",
              "Maintain a neutral spine position throughout"
            ].map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check size={20} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
@@ .. @@
            {
              step: "01",
              title: "Analyze Your Form",
              description: "Our AI camera analyzes your movements in real-time, providing instant feedback to improve your form and prevent injuries.",
              image: "https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              step: "02",
              title: "Adapt Your Workouts",
              description: "We adjust your training based on your stress levels, sleep quality, and recovery status for optimal results.",
              image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            },
            {
              step: "03",
              title: "Track Your Progress",
              description: "Visualize your improvements over time and earn NFT badges as you reach milestones in your fitness journey.",
              image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
          ].map((step, index) => (