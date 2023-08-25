# Workflows are everything

Here is an early prototype of how we may enter into an event based system, reacting and planning to events
rather than to making sure everything gets executed within the loop of the application service layer.

![workflow diagram](/documentation/assets/workflow-diagram-1.png)
[src:excalidraw workflows](https://link.excalidraw.com/l/35MtHSv1CBK/2c5ovflI0X0)

Forms have a bit of a special treatment since each one may have different characteristics
and parameters as to what should happen. Ie) a proposal completed means it might also have
triggered a contract. A contract, too, is a special form that lives as a discriminator
within the forms collection.

This may or may not be important in the long run, but something felt worth at least highlighting
it at this early stage.

![workflow forms diagram](/documentation/assets/workflow-diagram-2.png)
