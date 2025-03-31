import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";

export function Blog() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
        <Appbar />
      <div className="w-5/6 h-full flex flex-col items-center p-10">
        <BlogCard
          name="Arjit Khare"
          title="test title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper pulvinar tortor at laoreet. Vestibulum fringilla posuere ipsum et blandit. Nam interdum laoreet congue. Nam id elit sollicitudin, blandit quam vel, rutrum lorem. Vestibulum maximus neque vitae mi congue, sed eleifend ante rutrum. Nam dictum enim in lorem pharetra mollis. Donec tincidunt porta purus et sollicitudin. Donec tincidunt porta purus et sollicitudin."
          createdAt="12-01-2024"
        />
        <BlogCard
          name="Arjit Khare"
          title="test title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper pulvinar tortor at laoreet. Vestibulum fringilla posuere ipsum et blandit. Nam interdum laoreet congue. Nam id elit sollicitudin, blandit quam vel, rutrum lorem. Vestibulum maximus neque vitae mi congue, sed eleifend ante rutrum. Nam dictum enim in lorem pharetra mollis. Donec tincidunt porta purus et sollicitudin. Donec tincidunt porta purus et sollicitudin."
          createdAt="12-01-2024"
        />
        <BlogCard
          name="Arjit Khare"
          title="test title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper pulvinar tortor at laoreet. Vestibulum fringilla posuere ipsum et blandit. Nam interdum laoreet congue. Nam id elit sollicitudin, blandit quam vel, rutrum lorem. Vestibulum maximus neque vitae mi congue, sed eleifend ante rutrum. Nam dictum enim in lorem pharetra mollis. Donec tincidunt porta purus et sollicitudin. Donec tincidunt porta purus et sollicitudin."
          createdAt="12-01-2024"
        />
        <BlogCard
          name="Arjit Khare"
          title="test title"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper pulvinar tortor at laoreet. Vestibulum fringilla posuere ipsum et blandit. Nam interdum laoreet congue. Nam id elit sollicitudin, blandit quam vel, rutrum lorem. Vestibulum maximus neque vitae mi congue, sed eleifend ante rutrum. Nam dictum enim in lorem pharetra mollis. Donec tincidunt porta purus et sollicitudin. Donec tincidunt porta purus et sollicitudin."
          createdAt="12-01-2024"
        />
      </div>
    </div>
  );
}
