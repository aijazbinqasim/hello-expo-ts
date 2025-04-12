import { registerRootComponent } from "expo";

import App from "./App";
import TextBox from "./TextBox";
import KeybAvoidView from "./KeybAvoidView";
import PressAble from "./PressAble";
import SwitchDemo from "./SwitchDemo";
import ImageDemo from "./ImageDemo";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ImageDemo);
