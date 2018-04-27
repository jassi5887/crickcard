// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideUp =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideUp', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the bottom of the screen, 
                transform: 'translateY(100rem)'
            }),

            // animation and styles at end of transition
            animate('.2s ease-in-out', style({
                // transition the top position to 0 which slides the content into view
                transform: 'translateY(0)'
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.2s ease-in-out', style({
                transform: 'translateY(100rem)'
            }))
        ])
    ]);