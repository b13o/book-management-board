import { Book } from "@/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { deleteBook } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const BookCard = ({ book }: { book: Book }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  return (
    <Card className="p-4 mb-3 border-gray-400 shadow bg-stone-100 cursor-grab active:cursor-grabbing hover:animate-card-hover transition-all">
      <div className="flex justify-between items-start gap-2">
        <div>
          <h3 className="font-semibold text-sm mb-1">{book.title}</h3>
          <p className="text-sm text-muted-foreground">{book.author}</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>🚨 登録した本の削除</DialogTitle>
            <DialogDescription>
              『{book.title}"』を、本当に削除してもよろしいですか?
            </DialogDescription>
            <Button onClick={() => mutate(book.id)}>
              <DialogClose>Delete</DialogClose>
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

export default BookCard;
