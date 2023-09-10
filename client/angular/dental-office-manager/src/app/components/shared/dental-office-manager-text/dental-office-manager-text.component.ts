import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dental-office-manager-text",
  templateUrl: "./dental-office-manager-text.component.html",
  styleUrls: ["./dental-office-manager-text.component.scss"]
})
export class DentalOfficeManagerText {
  // When using this component in the app, you can specify a font-size,
  // because in some areas you might want it large, other areas small.
  @Input() textFontSize: string = "20px";
}