"use client";

import { useEffect, useRef, useCallback } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";

/* ------------------------------------------------------------------ */

interface ContentEditorProps {
  value: string;
  onChange: (val: string) => void;
  label?: string;
}

/* ------------------------------------------------------------------ */
/* Toolbar button                                                        */
/* ------------------------------------------------------------------ */
function ToolBtn({
  active,
  disabled,
  title,
  onClick,
  children,
}: {
  active?: boolean;
  disabled?: boolean;
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center h-8 min-w-[32px] px-2 rounded text-[12px] font-semibold transition-colors duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed
        ${active
          ? "bg-primary text-white"
          : "bg-white text-primary hover:bg-primary/10 border border-primary/15"
        }`}
    >
      {children}
    </button>
  );
}

/* Divider between toolbar groups */
function Divider() {
  return <div className="w-px h-6 bg-primary/15 mx-0.5" />;
}

/* ------------------------------------------------------------------ */
/* Toolbar                                                               */
/* ------------------------------------------------------------------ */
function Toolbar({ editor }: { editor: Editor }) {
  const setLink = useCallback(() => {
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Enter URL:", prev || "https://");
    if (url === null) return; // cancelled
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url, target: "_blank" }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt("Image URL:");
    if (!url) return;
    editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const isActive = (name: string, attrs?: Record<string, unknown>) =>
    editor.isActive(name, attrs);

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 bg-[#f0f4f8] border border-primary/20 rounded-t-xl border-b-0 sticky top-0 z-10">
      {/* History */}
      <ToolBtn
        title="Undo"
        disabled={!editor.can().undo()}
        onClick={() => editor.chain().focus().undo().run()}
      >
        ↩
      </ToolBtn>
      <ToolBtn
        title="Redo"
        disabled={!editor.can().redo()}
        onClick={() => editor.chain().focus().redo().run()}
      >
        ↪
      </ToolBtn>

      <Divider />

      {/* Text format */}
      <ToolBtn active={isActive("bold")} title="Bold (Ctrl+B)" onClick={() => editor.chain().focus().toggleBold().run()}>
        <strong>B</strong>
      </ToolBtn>
      <ToolBtn active={isActive("italic")} title="Italic (Ctrl+I)" onClick={() => editor.chain().focus().toggleItalic().run()}>
        <em>I</em>
      </ToolBtn>
      <ToolBtn active={isActive("underline")} title="Underline (Ctrl+U)" onClick={() => editor.chain().focus().toggleUnderline().run()}>
        <u>U</u>
      </ToolBtn>
      <ToolBtn active={isActive("strike")} title="Strikethrough" onClick={() => editor.chain().focus().toggleStrike().run()}>
        <s>S</s>
      </ToolBtn>
      <ToolBtn active={isActive("code")} title="Inline Code" onClick={() => editor.chain().focus().toggleCode().run()}>
        {"<>"}
      </ToolBtn>

      <Divider />

      {/* Headings — dropdown */}
      <select
        title="Text Style"
        value={
          isActive("heading", { level: 2 }) ? "h2" :
          isActive("heading", { level: 3 }) ? "h3" :
          isActive("heading", { level: 4 }) ? "h4" : "p"
        }
        onChange={(e) => {
          const v = e.target.value;
          if (v === "p") editor.chain().focus().setParagraph().run();
          else editor.chain().focus().toggleHeading({ level: parseInt(v[1]) as 2 | 3 | 4 }).run();
        }}
        className="h-8 px-2 pr-1 rounded text-[12px] font-semibold border border-primary/20 bg-white text-primary focus:outline-none focus:ring-2 focus:ring-gold/40 cursor-pointer"
      >
        <option value="p">Paragraph</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
        <option value="h4">Heading 4</option>
      </select>

      <Divider />

      {/* Lists */}
      <ToolBtn active={isActive("bulletList")} title="Bullet List" onClick={() => editor.chain().focus().toggleBulletList().run()}>
        • List
      </ToolBtn>
      <ToolBtn active={isActive("orderedList")} title="Ordered List" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        1. List
      </ToolBtn>
      <ToolBtn active={isActive("blockquote")} title="Blockquote" onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        ❝
      </ToolBtn>
      <ToolBtn active={isActive("codeBlock")} title="Code Block" onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
        [ ]
      </ToolBtn>

      <Divider />

      {/* Alignment */}
      <ToolBtn active={editor.isActive({ textAlign: "left" })} title="Align Left" onClick={() => editor.chain().focus().setTextAlign("left").run()}>
        ≡L
      </ToolBtn>
      <ToolBtn active={editor.isActive({ textAlign: "center" })} title="Align Center" onClick={() => editor.chain().focus().setTextAlign("center").run()}>
        ≡C
      </ToolBtn>
      <ToolBtn active={editor.isActive({ textAlign: "right" })} title="Align Right" onClick={() => editor.chain().focus().setTextAlign("right").run()}>
        ≡R
      </ToolBtn>

      <Divider />

      {/* Link + Image */}
      <ToolBtn active={isActive("link")} title="Insert / Edit Link" onClick={setLink}>
        🔗 Link
      </ToolBtn>
      <ToolBtn title="Insert Image (URL)" onClick={addImage}>
        🖼 Image
      </ToolBtn>

      <Divider />

      {/* Highlight */}
      <ToolBtn active={isActive("highlight")} title="Highlight" onClick={() => editor.chain().focus().toggleHighlight().run()}>
        ✦ Mark
      </ToolBtn>

      {/* HR */}
      <ToolBtn title="Horizontal Rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        ─ HR
      </ToolBtn>

      {/* Clear formatting */}
      <ToolBtn title="Clear Formatting" onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}>
        ✕ Clear
      </ToolBtn>

      <Divider />

      {/* Color presets */}
      <div className="flex items-center gap-1" title="Text Color">
        {[
          { color: "#132f46", label: "Navy" },
          { color: "#e0b969", label: "Gold" },
          { color: "#1d629a", label: "Blue" },
          { color: "#dc2626", label: "Red" },
          { color: "#16a34a", label: "Green" },
          { color: "#000000", label: "Black" },
        ].map(({ color, label }) => (
          <button
            key={color}
            type="button"
            title={`Color: ${label}`}
            onClick={() => editor.chain().focus().setColor(color).run()}
            className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-transform hover:scale-110 ${
              isActive("textStyle", { color }) ? "border-primary scale-110" : "border-white"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
        <button
          type="button"
          title="Remove Color"
          onClick={() => editor.chain().focus().unsetColor().run()}
          className="w-5 h-5 rounded-full border-2 border-primary/20 bg-gradient-to-br from-white to-gray-200 cursor-pointer text-[8px] flex items-center justify-center hover:border-primary/50 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main editor component                                                 */
/* ------------------------------------------------------------------ */
export default function ContentEditor({
  value,
  onChange,
  label = "Content",
}: ContentEditorProps) {
  const initialized = useRef(false);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
      }),
      Image.configure({ HTMLAttributes: { class: "rounded-lg max-w-full my-4" } }),
      Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-gold underline" } }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Color,
      Highlight.configure({ multicolor: false }),
      Placeholder.configure({
        placeholder: "Start writing your content here…",
      }),
    ],
    content: "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "px-6 py-5 focus:outline-none text-[15px] leading-relaxed text-[#2a2a2a]",
      },
    },
  });

  // Load external content once (for edit pages where value arrives async)
  useEffect(() => {
    if (editor && value && !initialized.current) {
      editor.commands.setContent(value);
      initialized.current = true;
    }
  }, [editor, value]);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-[13px] font-semibold text-primary">{label}</label>
      )}

      <div className="border border-primary/20 rounded-xl overflow-hidden shadow-sm bg-white">
        {editor && <Toolbar editor={editor} />}

        {/* Editor area — fixed height, inner content scrolls */}
        <div className="h-[500px] overflow-y-auto bg-white">
          <EditorContent
            editor={editor}
            className="
              [&_.tiptap_h2]:text-[26px] [&_.tiptap_h2]:font-bold [&_.tiptap_h2]:text-primary [&_.tiptap_h2]:mt-8 [&_.tiptap_h2]:mb-3
              [&_.tiptap_h3]:text-[20px] [&_.tiptap_h3]:font-semibold [&_.tiptap_h3]:text-primary [&_.tiptap_h3]:mt-6 [&_.tiptap_h3]:mb-2
              [&_.tiptap_h4]:text-[17px] [&_.tiptap_h4]:font-semibold [&_.tiptap_h4]:text-primary [&_.tiptap_h4]:mt-5 [&_.tiptap_h4]:mb-2
              [&_.tiptap_p]:text-[15px] [&_.tiptap_p]:leading-relaxed [&_.tiptap_p]:mb-3
              [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:pl-6 [&_.tiptap_ul]:mb-4
              [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:pl-6 [&_.tiptap_ol]:mb-4
              [&_.tiptap_li]:mb-1
              [&_.tiptap_a]:text-gold [&_.tiptap_a]:underline
              [&_.tiptap_blockquote]:border-l-4 [&_.tiptap_blockquote]:border-gold [&_.tiptap_blockquote]:pl-4 [&_.tiptap_blockquote]:italic [&_.tiptap_blockquote]:text-primary/60 [&_.tiptap_blockquote]:my-4
              [&_.tiptap_hr]:border-primary/20 [&_.tiptap_hr]:my-6
              [&_.tiptap_code]:bg-primary/5 [&_.tiptap_code]:text-primary [&_.tiptap_code]:px-1.5 [&_.tiptap_code]:py-0.5 [&_.tiptap_code]:rounded [&_.tiptap_code]:text-[13px] [&_.tiptap_code]:font-mono
              [&_.tiptap_pre]:bg-primary/5 [&_.tiptap_pre]:rounded-lg [&_.tiptap_pre]:p-4 [&_.tiptap_pre]:my-4 [&_.tiptap_pre]:overflow-x-auto
              [&_.tiptap_mark]:bg-yellow-200 [&_.tiptap_mark]:rounded-sm [&_.tiptap_mark]:px-0.5
              [&_.tiptap_.is-editor-empty:first-child::before]:content-[attr(data-placeholder)] [&_.tiptap_.is-editor-empty:first-child::before]:text-primary/30 [&_.tiptap_.is-editor-empty:first-child::before]:float-left [&_.tiptap_.is-editor-empty:first-child::before]:pointer-events-none [&_.tiptap_.is-editor-empty:first-child::before]:h-0
            "
          />
        </div>

        {/* Footer bar */}
        <div className="border-t border-primary/10 px-4 py-2 flex items-center justify-between bg-[#f8fafc]">
          <span className="text-[11px] text-primary/40">
            Tip: Select text then click toolbar buttons. Use Ctrl+B / Ctrl+I / Ctrl+U for quick formatting.
          </span>
          {editor && (
            <span className="text-[11px] text-primary/40">
              {editor.storage.characterCount?.characters?.() ?? ""}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
