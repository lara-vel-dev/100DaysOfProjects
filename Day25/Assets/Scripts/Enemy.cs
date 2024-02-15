using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour
{
    // Global variables
    public int damage = 1;
    public float speed;

    // Update is called once per frame
    void Update()
    {
        // Moves enemy towards player
        transform.Translate(Vector2.left * speed * Time.deltaTime);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Player"))
        {
            collision.GetComponent<Player>().health -= damage;
            Destroy(gameObject);
        }
    }
}
