export const dejanUser = {
  fullName: "Dejan",
  imageUrl: "https://randomuser.me/api/portraits/men/74.jpg",
  email: "dejan@example.com",
};

export const dejanPlans = [
  {
    _id: "plan1",
    name: "Beginner Weight Loss Program",
    isActive: true,

    workoutPlan: {
      schedule: ["Monday", "Wednesday", "Friday", "Saturday"],
      exercises: [
        {
          day: "Monday",
          routines: [
            {
              name: "Full Body Cardio",
              sets: 1,
              reps: 1,
              description: "30 minutes of joint-friendly cardio to start the week strong.",
            },
          ],
        },
        {
          day: "Wednesday",
          routines: [
            {
              name: "Core & Lower Body",
              sets: 1,
              reps: 1,
              description: "Strengthening routine that supports fat loss and back stability.",
            },
          ],
        },
        {
          day: "Friday",
          routines: [
            {
              name: "HIIT Training",
              sets: 1,
              reps: 1,
              description: "25-minute high-intensity interval training session.",
            },
          ],
        },
        {
          day: "Saturday",
          routines: [
            {
              name: "Active Recovery",
              sets: 1,
              reps: 1,
              description: "40 minutes of low-intensity recovery movement.",
            },
          ],
        },
      ],
    },

    dietPlan: {
      dailyCalories: "1600",
      meals: [
        {
          name: "Breakfast",
          foods: [
            "Oatmeal with almond milk",
            "Berries",
            "Chia seeds",
          ],
        },
        {
          name: "Lunch",
          foods: [
            "Grilled chicken salad",
            "Olive oil dressing",
          ],
        },
        {
          name: "Dinner",
          foods: [
            "Baked salmon",
            "Quinoa",
            "Roasted vegetables",
          ],
        },
        {
          name: "Snacks",
          foods: [
            "Apple with almond butter",
            "Dairy-free yogurt with nuts",
          ],
        },
      ],
    },
  },

  // Drugi plan za showcase
  {
    _id: 'plan2',
    name: 'Fat Burn Min',
    isActive: false,
    workoutPlan: {
      schedule: ['Tue', 'Thu', 'Sat'],
      exercises: [
        {
          day: 'Tuesday',
          routines: [
            { name: 'HIIT Cardio', sets: 1, reps: 20, description: 'Short bursts of intensity.' },
            { name: 'Mountain Climbers', sets: 3, reps: 30 },
          ],
        },
        {
          day: 'Thursday',
          routines: [
            { name: 'Burpees', sets: 3, reps: 12 },
            { name: 'Plank', sets: 3, reps: 60, description: 'Hold for 60 seconds.' },
          ],
        },
      ],
    },
    dietPlan: {
      dailyCalories: 1800,
      meals: [
        {
          name: 'Breakfast',
          foods: ['Greek yogurt', 'Banana', 'Almonds'],
        },
        {
          name: 'Lunch',
          foods: ['Turkey wrap', 'Salad'],
        },
      ],
    },
  },
];