import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Book } from "@/types";

type CreateBookDialogProps = {
  createBook: (newBook: Book) => void;
};

const CreateBookDialog = ({ createBook }: CreateBookDialogProps) => {
  // 追加
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    createBook({
      id: crypto.randomUUID(),
      title,
      author,
      status: "want-to-read",
    });
    setOpen(false);
    setTitle("");
    setAuthor("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size={"lg"}
          className="bg-emerald-600 text-sm text-white rounded-lg hover:bg-emerald-700"
        >
          <Plus className="w-4 h-4" />
          Add Book
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>✏️ 新しい本を追加</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">タイトル</Label>
            <Input
              id="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter book title"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">著者</Label>
            <Input
              id="author"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
            />
          </div>
          <Button
            type="submit"
            size={"lg"}
            className="bg-emerald-600 w-full text-sm text-white rounded-lg hover:bg-emerald-700"
          >
            Add Book
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBookDialog;
