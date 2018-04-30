// import the required animation functions from the angular animations module
import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideLeft =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideLeft', [

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
                // start with the content positioned off the right of the screen, 
                transform: 'translateX(100rem)',
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                transform: 'translateX(0)',
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                transform: 'translateX(100rem)',
            }))
        ])
    ]);