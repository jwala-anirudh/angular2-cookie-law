/**
 * angular2-cookie-law-banner
 *
 * Copyright 2016-2018, @jwala-anirudh, All rights reserved.
 *
 * @author: @jwala-anirudh <anirudhjwala@gmail.com>
 */

import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata,
} from "@angular/animations";

export const translateInOut: AnimationTriggerMetadata = trigger("transition", [
  state("*", style({ transform: "translateY(0)" })),
  state("void", style({ transform: "translateY(0)" })),

  state("bottomOut", style({ transform: "translateY(100%)" })),
  state("topOut", style({ transform: "translateY(-100%)" })),

  transition("void => topIn", [
    style({ transform: "translateY(-100%)" }),
    animate("1000ms ease-in-out"),
  ]),

  transition("void => bottomIn", [
    style({ transform: "translateY(100%)" }),
    animate("1000ms ease-in-out"),
  ]),

  transition("* => *", animate("1000ms ease-out")),
]);
