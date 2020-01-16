import tensorflow as tf

v = tf.Variable(shape = [2,2], initial_value =
tf.random.truncated_normal([2,2]), dtype = tf.float32)

u = tf.constant([[1,2],[3,4]], dtype = tf.float32)

prod = tf.matmul(u, v)
