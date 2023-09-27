¿Qué sucedió al usar async y await?
Al utilizar asyncy await, el código se ejecuta de manera síncrona en un contexto asíncrono. Esto significa que las funciones marcadas con async pueden esperar la resolución de promesas sin bloquear el hilo de ejecución. Esto hace que el código sea más legible y fácil de entender.

¿Qué sucedió al usar el método then()?
Al utilizar el método then(), se encadenan promesas y se especifica qué hacer cuando cada una de ellas se resuelve o se rechaza. Esto proporciona un control detallado sobre el flujo de ejecución y permite realizar acciones específicas en función del resultado de cada promesa.

¿Qué diferencias encontraste entre async, await y el método then()?
async/await proporciona una sintaxis más limpia y fácil de leer para trabajar con promesas. Permite escribir código asincrónico de manera similar a código síncrono, lo que facilita la comprensión del flujo de ejecución.

El método then()es más explícito y se utiliza para encadenar promesas y especificar qué hacer cuando una promesa se resuelve o se rechaza. Es útil para situaciones donde se requiere un mayor control sobre el flujo de ejecución.

Ambos enfoques tienen sus ventajas y se pueden utilizar según las necesidades y preferencias del desarrollador.