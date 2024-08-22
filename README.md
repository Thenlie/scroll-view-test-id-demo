# React Native Scroll View TestID Bug

This repository was created to demonstrate a bug in React Native's testID prop. On Android, this prop is not correctly mapped to the resource ID on certain elements, namely the `ScrollView`.

## Appium Inspector

<img width="1392" alt="Xnip2024-08-22_16-55-50" src="https://github.com/user-attachments/assets/953d68cc-66a9-45d7-a517-61ee92714713">

As can be seen in this image, the `ScrollView` does not contain a resource ID while the `View` does.
