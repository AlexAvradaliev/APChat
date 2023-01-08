import styles from './SubMenu.module.css';

const SubMenu = ({ options, top, left, right, bottom, variant }) => {
    const style = {
        top: top ? top : '',
        left: left ? left : '',
        right: right ? right : '',
        bottom: bottom ? bottom : '',
    };
console.log(options)
    return (
        <>
            {variant === '1' && (
                <div className={styles.items__v1} style={style}>
                    {options.map((el, i) => {
                        return (
                            <button key={i} className={styles.item_content__v1}>
                                <p>{el.title}</p>
                                {el.icon && <el.icon />}
                            </button>
                        );
                    })}
                </div>
            )}
            {variant === '2' &&(
                  <div className={styles.items__v2} style={style}>
                  {options.map((el, i) => {
                      return (
                          <button key={i} className={styles.item_content__v2}>
                              {el.icon && <el.icon />}
                          </button>
                      );
                  })}
              </div>
            )}
        </>
    );
};

export default SubMenu;
