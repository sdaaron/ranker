import { useSignIn } from "@clerk/nextjs";

const CustomSignInButton = () => {
  const signIn = useSignIn();

  const handleSignIn = () => {
    // 调用 Clerk 的 signIn 方法来触发登录流程
    signIn();
  };

  return (
    <button onClick={handleSignIn} className="your-custom-class">
      登录
    </button>
  );
};

export default CustomSignInButton;
