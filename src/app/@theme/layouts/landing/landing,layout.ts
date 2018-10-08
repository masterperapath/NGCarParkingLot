import {
    Component,
    OnDestroy,
    OnInit,
    Renderer,
    ElementRef,
    HostListener
   } from "@angular/core";
   import {
    NbMediaBreakpoint,
    NbMediaBreakpointsService,
    NbMenuItem,
    NbMenuService,
    NbSidebarService,
    NbThemeService
   } from "@nebular/theme";
   import { Inject } from "@angular/core";
   import { DOCUMENT } from "@angular/platform-browser";
   import { WINDOW } from "./window.service";
   
   import { StateService } from "../../../@core/data/state.service";
   
   import { Subscription } from "rxjs/Subscription";
   import "rxjs/add/operator/withLatestFrom";
   import "rxjs/add/operator/delay";
   
   // TODO: move layouts into the framework
   @Component({
    selector: "landing-layout",
    styleUrls: ["./landing.layout.scss"],
    template: `
      <nb-layout [center]="layout.id === 'center-column'" windowMode="false">
        <nb-layout-column class="main-content" style="padding: 0rem 0rem 0rem;">
          <ng-content select="router-outlet"></ng-content>
        </nb-layout-column>
      </nb-layout>
    `
   })
   // @ViewChild('scrollableContainer', { read: ElementRef }) scrollableContainerRef: ElementRef;
   export class LandingLayoutComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;
    ngOnInit() {
      var test2: HTMLElement = this.element.nativeElement;
      var test: HTMLElement = this.element.nativeElement.children[0].children[0]
        .children[0].children[0].children[0].children[0].children[0].children[1]
        .children[0].children[1].children[0];
      var navbar: HTMLElement = this.element.nativeElement.children[0].children[0]
        .children[0].children[0].children[0].children[0].children[0].children[1]
        .children[0].children[1].children[0];
      var navbarDolaw: HTMLElement = this.element.nativeElement.children[0]
        .children[0].children[0].children[0].children[0].children[0].children[0]
        .children[1].children[0].children[1].children[0].children[0].children[0]
        .children[0].children[0];
      this.renderer.listen(this.window, "scroll", event => {
        const number = window.pageYOffset;
        if (number > 200 || window.pageYOffset > 200) {
          // add logic
          navbar.classList.remove("navbar-transparent");
          navbarDolaw.style.maxWidth = "70px";
          navbarDolaw.style.marginTop = "0%";
          navbarDolaw.style.paddingTop = "0rem";
          navbarDolaw.style.transition = "all linear 0.3s";
          navbar.style.background = "white";
        } else {
          // remove logic
          navbar.classList.add("navbar-transparent");
          navbarDolaw.style.maxWidth = "100px";
          navbarDolaw.style.marginTop = "-35%";
          navbarDolaw.style.paddingTop = "2rem";
          navbar.style.background = "none";
        }
      });
      const navbarT: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbarT.getElementsByClassName('navbar-toggler')[0];
    }
    layout: any = {};
    sidebar: any = {};
   
    protected layoutState$: Subscription;
    protected sidebarState$: Subscription;
    protected menuClick$: Subscription;
   
    constructor(
      private renderer: Renderer,
      private element: ElementRef,
      @Inject(DOCUMENT) private document: Document,
      @Inject(WINDOW) private window: Window // @Inject(WINDOW) private window: Window
    ) {
        this.sidebarVisible = false;
    }
   
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
   
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
   
        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
   }
   