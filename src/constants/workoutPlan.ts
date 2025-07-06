export interface WorkoutStep {
    number: string;
    description: string;
}

export const workoutPlan: WorkoutStep[] = [
    { number: '01', description: '30 min strength training (upper body)' },
    { number: '02', description: '20 min cardio (moderate intensity)' },
    { number: '03', description: '10 min flexibility (recovery)' },
];