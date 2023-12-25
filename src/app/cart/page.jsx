import React from "react";
import styles from "./cart.module.css";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";

const cart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>your cart</h2>
      <div className={styles.wrapper}>
        <div className={styles.products}>
          <div className={styles.product}>
            <div className={styles.proImg}>
              <Image src="/main.png" alt="" fill />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.proName}>air max 2023</div>
              <div className={styles.proDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi recusandae incidunt doloribus?
              </div>
              <div className={styles.price}>150$</div>
            </div>
            <input
              className={styles.qty}
              type="number"
              defaultValue={1}
              min={1}
            />
            <div className={styles.total}>120$</div>
            <MdDeleteForever className={styles.delete} />
          </div>
          <div className={styles.product}>
            <div className={styles.proImg}>
              <Image src="/main.png" alt="" fill />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.proName}>air max 2023</div>
              <div className={styles.proDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi recusandae incidunt doloribus?
              </div>
              <div className={styles.price}>150$</div>
            </div>
            <input
              className={styles.qty}
              type="number"
              defaultValue={1}
              min={1}
            />
            <div className={styles.total}>120$</div>
            <MdDeleteForever className={styles.delete} />
          </div>
          <div className={styles.product}>
            <div className={styles.proImg}>
              <Image src="/main.png" alt="" fill />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.proName}>air max 2023</div>
              <div className={styles.proDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi recusandae incidunt doloribus?
              </div>
              <div className={styles.price}>150$</div>
            </div>
            <input
              className={styles.qty}
              type="number"
              defaultValue={1}
              min={1}
            />
            <div className={styles.total}>120$</div>
            <MdDeleteForever className={styles.delete} />
          </div>
          <div className={styles.product}>
            <div className={styles.proImg}>
              <Image src="/main.png" alt="" fill />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.proName}>air max 2023</div>
              <div className={styles.proDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi recusandae incidunt doloribus?
              </div>
              <div className={styles.price}>150$</div>
            </div>
            <input
              className={styles.qty}
              type="number"
              defaultValue={1}
              min={1}
            />
            <div className={styles.total}>120$</div>
            <MdDeleteForever className={styles.delete} />
          </div>
          <div className={styles.product}>
            <div className={styles.proImg}>
              <Image src="/main.png" alt="" fill />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.proName}>air max 2023</div>
              <div className={styles.proDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi recusandae incidunt doloribus?
              </div>
              <div className={styles.price}>150$</div>
            </div>
            <input
              className={styles.qty}
              type="number"
              defaultValue={1}
              min={1}
            />
            <div className={styles.total}>120$</div>
            <MdDeleteForever className={styles.delete} />
          </div>
          <div className={styles.product}>
            <div className={styles.proImg}>
              <Image src="/main.png" alt="" fill />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.proName}>air max 2023</div>
              <div className={styles.proDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi recusandae incidunt doloribus?
              </div>
              <div className={styles.price}>150$</div>
            </div>
            <input
              className={styles.qty}
              type="number"
              defaultValue={1}
              min={1}
            />
            <div className={styles.total}>120$</div>
            <MdDeleteForever className={styles.delete} />
          </div>
        </div>
        <div className={styles.check}>
          <div className={styles.info}>
            <p>subtotal (2 item)</p>
            <span>120$</span>
          </div>
          <div className={styles.info}>
            <p>shipping</p>
            <span>free</span>
          </div>
          <hr />
          <div className={styles.info}>
            <p>total</p>
            <span>120$</span>
          </div>

          <button className={styles.btn}>checkout</button>
        </div>
      </div>
    </div>
  );
};

export default cart;
