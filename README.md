## NutriCare - HealthHack 2025

NutriCare is a prototype developed for HealthHack 2025. It aims to address malnutrition in outpatients, particularly the elderly, by offering a variety of catering options tailored to different dietary needs. NutriCare connects users with hospitals and other food providers to deliver meals that meet specific nutritional requirements.

### Features

- **Personalized Meal Plans**: Customizable meal plans based on individual dietary needs.
- **Variety of Providers**: Access to multiple food providers, including hospitals and specialized caterers.
- **Convenient Delivery**: Meals delivered directly to the user's home.
- **Nutritional Tracking**: Monitor and track nutritional intake to ensure balanced diets.

### How to Use

1. **Sign Up**: Create an account and provide your dietary preferences and restrictions.
2. **Choose a Meal Plan**: Subscribe to a meal plan from a provider of your choice, either weekly or monthly. (Partially implemented, except payment)
3. **Order Meals**: Place orders from a variety of food providers. (Not implemented as of submission)
4. **Track Nutrition**: Use the app to track your nutritional intake and adjust your plan as needed. (Not implemented as of submission)

### Technologies Used

- **Frontend**: Vue.js, Capacitor
- **Possible Backend**: Java / Node.js / Express
- **Possible Database**: Firebase / MongoDB
- **Testing**: Vitest
- **Linting**: ESLint

### Getting Started

Follow the instructions in the Project Setup section to install dependencies, compile the project, and run tests.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build-only
```

### Run on iOS (after build)

```sh
npx cap sync ios
npx cap run ios
```

Alternatively, open the project in Xcode after cap sync with:

```sh
npx cap open ios
```

and run it on a simulator or a connected device.

### Run on Android (after build)

```sh
npx cap sync android
npx cap run android
```

Alternatively, open the project in Android Studio after cap sync with:

```sh
npx cap open android
```

and run it on a simulator or a connected device.

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
