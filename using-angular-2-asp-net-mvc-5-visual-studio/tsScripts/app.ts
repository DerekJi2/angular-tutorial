/// <reference path ="../typings/globals/jquery/index.d.ts"/> 
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: "/tsScripts/app.template.html"
})
export class AppComponent {
    h2content = $('.navbar-brand').html();
    hahastr = 'haha string';
    title = 'ASP.NET MVC 5 with Angular 2';
    skills = ['MVC 5', this.h2content + ' (jquery get)', this.hahastr, 'haha', 'Angular 2', 'TypeScript', 'Visual Studio 2015'];
    myskills = this.skills[4];    

}