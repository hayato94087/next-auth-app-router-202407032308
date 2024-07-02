import { type FC } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
 } from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";

const Home: FC = () => {
  return (
    <main>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Hello World</h1>
          <div className="h-4" />
          <HelloWorldButton />
        </div>
      </div>
    </main>
  );
};

const HelloWorldButton = () => {
  return (
    <AlertDialog defaultOpen={false}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Click Me</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hello World</AlertDialogTitle>
          <AlertDialogDescription>
            これは単純な「Hello World」のダイアログです。
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>閉じる</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
 };

export default Home;