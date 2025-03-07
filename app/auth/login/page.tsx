import { Button } from "@/components/ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <p>Login</p>
      <Button variant={"blue"} asChild>
        <Link href="/dashboard">Dashboard</Link>
      </Button>
    </div>
  );
};

export default Login;
