## The Virtual Closet

Final project for COMP 590.
The Virtual Closet is a outfit organizing mobile app. Stores each of your outfits by taking a photo/selfie. Search for outfits via tags you assign to each outfit and see what outfits you have recently worn via the calendar view.

Created and developed by Ashley Wortham, Hamza Elmahdy, Will Hinson, and Anders Hartmark.

### Setting up the project

Clone the git repository on to your PC and then follow the following steps.

- Open a terminal and navigate to the project folder 
- Run <code>npm install --global expo-cli</code> in your terminal

### Running the code

Install Expo Go on your phone. 

Type in the console <code>expo start</code>

### React Native/Expo documentation

- https://docs.expo.dev/get-started/installation/
- https://docs.expo.dev/ 

## Coding conventions/developer tips

### Navigation/Nav Bar

Each of the 5 tabs on the navigation bar correspond to the main 5 screens:
- Home - TabOneScreen.tsx
- Calendar - CalendarScreen.tsx
- Add Outfit - AddOutfitScreen.tsx
- Closet - ClosetScreen.tsx
- Settings - Settings.tsx

Note: *Home tab/screen is TabOneScreen.tsx* - Do not rename this file. The Expo project structure is finicky so leave the first tab named TabOneScreen.tsx


### Instructions for creating a new screen

**Create all new screens in the *screens* folder**

To navigate to a new screen, use the following code:
```
<Pressable style={styles.button} onPress={() => navigation.navigate('Settings')}>
    <Text>Log in</Text>
</Pressable>
```
*This example creates a button that when clicked navigates you to SettingsScreen.tsx*

You also have to add an object to the **LinkingConfiguration.ts** file in JSON format.
Add it to the bottom of the list of objects in *LinkingOptions*

```
...
Settings: {
    screens: {
        SettingsScreen: 'settings'
    }
},
...
```
Add to the list in this format.