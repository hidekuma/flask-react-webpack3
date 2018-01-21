from functools import wraps
import logging
import logging.handlers
import os

file_root = os.path.dirname(os.path.abspath(__file__))


def create_logger(funcStr):
    logger = logging.getLogger(funcStr)
    logger.setLevel(logging.INFO)
    log_file_max_byte = 1024 * 1024 * 100  # 100MB
    log_file_back_up_count = 10
    log_file_path = os.path.join(file_root, '../../logs/app.log')
    fh = logging.handlers.RotatingFileHandler(
        log_file_path,
        maxBytes=log_file_max_byte,
        backupCount=log_file_back_up_count
    )
    sh = logging.StreamHandler()
    # fmt = '[%(levelname)s|%(name)s|%(filename)s:%(lineno)s] %(asctime)s > %(message)s'
    fmt = '%(levelname)s - %(asctime)s - %(name)s - %(message)s'
    formatter = logging.Formatter(fmt)
    fh.setFormatter(formatter)
    sh.setFormatter(formatter)
    logger.addHandler(fh)
    logger.addHandler(sh)
    return logger


def func_logger(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        logger = create_logger(str(func))
        try:
            return func(*args, **kwargs)
        except Exception as e:
            logger.exception(e)
            raise

    return wrapper
