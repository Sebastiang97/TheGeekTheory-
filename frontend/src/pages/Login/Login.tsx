import { FormDinamic } from "@@/forms/FormDinamic"
import { actions, inputLoginFields } from "./Login.constant"

export const Login = () => {
  return (
    <div className="container">
      <FormDinamic inputFields={inputLoginFields} actions={actions} />
    </div>
  )
}
