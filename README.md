# Imo Quiz App

A modern, mobile-first quiz application built with **React Native** and **Expo**. Imo Quiz App lets users enter a username, take quizzes with questions fetched from the [Open Trivia Database API](https://opentdb.com/), and track their high scores using **Firebase**. The app features a clean UI, adaptive quiz difficulty, and smooth navigation.

---

## Project Overview

Imo Quiz App is designed to provide an engaging quiz experience on mobile devices. Users can test their knowledge, compete for high scores, and enjoy a seamless interface powered by React Native and Expo.

---

## Features

- **User Authentication:** Enter a username to start playing.
- **Dynamic Quizzes:** Fetches questions from the Open Trivia Database API.
- **Adaptive Difficulty:** Quiz difficulty adjusts based on user performance.
- **Score Tracking:** View your score and high score (stored in Firebase).
- **Modern UI:** Built with React Native components for a native feel.
- **TypeScript Support:** Ensures type safety and better developer experience.
- **Navigation:** Smooth transitions using React Navigation.

---

## Screenshots

> _Replace these with actual screenshots after running the app._

- **Home Screen:**  
    ![Home Screen](assets/placeholder-home.png)

- **Quiz Screen:**  
    ![Quiz Screen](assets/placeholder-quiz.png)

- **Result Screen:**  
    ![Result Screen](assets/placeholder-result.png)

---

## Installation

1. **Clone the repository:**
     ```bash
     git clone https://github.com/Pappyjay157/imo-quiz-app.git
     cd imo-quiz-app
     ```

2. **Install dependencies:**
     ```bash
     npm install
     # or
     yarn install
     ```

3. **Set up Firebase:**
     - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
     - Add your Firebase config to `src/api/firebase.ts`.

4. **Configure environment variables (if needed).**

---

## Running the App

- **Start the Expo development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

- **Run on your device:**
    - Use the Expo Go app (iOS/Android) to scan the QR code.
    - Or run on an emulator/simulator.

---

## Project Structure

```
imo-quiz-app/
├── .gitignore
├── app.json
├── App.tsx
├── index.ts
├── package.json
├── tsconfig.json
├── assets/
│   ├── adaptive-icon.png
│   ├── assistant.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
└── src/
        ├── api/
        │   ├── fetchQuestions.ts
        │   └── firebase.ts
        ├── components/
        ├── constants/
        │   └── tips.ts
        ├── screens/
        │   ├── HomeScreen.tsx
        │   ├── QuizScreen.tsx
        │   └── ResultScreen.tsx
        ├── types/
        │   └── navigation.ts
        └── utils/
```

---

## Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [Firebase](https://firebase.google.com/)
- [Open Trivia Database API](https://opentdb.com/)

---

## API Reference

- **Open Trivia Database API:**  
    Used for fetching quiz questions.  
    [API Docs](https://opentdb.com/api_config.php)

- **Firebase:**  
    Used for storing and retrieving high scores.

---

## Contributing

Contributions are welcome!  
1. Fork the repository  
2. Create a new branch  
3. Make your changes  
4. Submit a pull request

For questions or suggestions, contact [ayooluwasamuel619@gmail.com](mailto:ayooluwasamuel619@gmail.com).

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
