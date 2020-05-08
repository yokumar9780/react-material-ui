import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import PermMediaOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActual";
import PublicIcon from "@material-ui/icons/Public";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import TimerIcon from "@material-ui/icons/Timer";
import SettingsIcon from "@material-ui/icons/Settings";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

export const fleets = [
  {
    key: "Fleet1",
    label: "Fleet1",
    icon: LocalShippingIcon,
    items: [
      {
        key: "Blue Ranger",
        label: "Blue Ranger",
        icon: LocalShippingIcon,
      },
      {
        key: "Red Gears",
        label: "Red Gears",
        icon: LocalShippingIcon,
      },
      {
        key: "Terminator",
        label: "Terminator",
        icon: LocalShippingIcon,
      },
    ],
  },
  {
    key: "fleet 2",
    label: "Fleet 2",
    icon: LocalShippingIcon,
    items: [{ key: "Torque300", label: "Torque300", icon: LocalShippingIcon }],
  },
];
