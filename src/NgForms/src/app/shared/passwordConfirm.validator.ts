import {AbstractControl} from "@angular/forms";

export function confirmPasswordValidator(control:AbstractControl): { mismatch: boolean } | null  {
  const password = control.get("password")
  const confirmPassword = control.get("confirmPassword");
  console.log(password?.value , confirmPassword?.value)
  return password && confirmPassword && password.value !== confirmPassword.value ? {'mismatch' :true} : null


}
