import { styles } from "assets";
import { FC, memo } from "react";
import { IImage } from "types/common.types";

const EImageList: FC<{ images: IImage[] }> = ({ images }) => (
  <>
    <div className="d_pictures">
      {(images || []).map((img, i) => (
        <div
          key={`img_${i}`}
          className="d_picture_content"
          style={{
            width: (img.w * 150) / img.h,
            height: 150,
          }}
        >
          <amp-img
            className="d_picture"
            height={img.h}
            width={img.w}
            src={img.path}
            lightbox
            layout="fill"
          />
        </div>
      ))}
    </div>
    <style jsx>{`
      .d_pictures {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        margin-left: 1.5rem;
      }
      .d_picture_content {
        position: relative;
        display: inline-block;
      }
      .d_picture {
        margin: 0.5rem;
        cursor: pointer;
        ${styles.br}
      }
    `}</style>
  </>
);

export default memo(EImageList);
