# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `owner`

**Required** nome da pessoa ou org publica 

## repo

### `api`

**Required** nome do repositorio 

## Outputs

### `api`

Pegando os dados do github por API

## Example usage

```yaml
- name: hugollemos/actions@v1
        id: hello
        uses: hugollemos/actions@v1
        with:
          owner: 
          repo: 
```
