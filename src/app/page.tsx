import ImageComponent from "@/components/ImageComponent";
import style from "./page.module.css";

export default function Home() {
  const publicId = "zojkica";

  return (
    <div className={style.mainDiv}>
      <main>
        <div className={style.imageDiv}>
          <ImageComponent publicId={publicId} classes={style.image} />
          <p>mala coka moka</p>
        </div>
      </main>
    </div>
  );
}
