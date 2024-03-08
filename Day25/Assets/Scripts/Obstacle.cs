using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Obstacle : MonoBehaviour
{
    // Global variables
    public int damage, speed;
    public GameObject effect, dogSound;

    private void Update()
    {
        transform.Translate(Vector2.left * speed * Time.deltaTime);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("Player"))
        {
            Instantiate(dogSound, transform.position, Quaternion.identity);
            Instantiate(effect, transform.position, Quaternion.identity);

            collision.GetComponent<Player>().health -= damage;
            Debug.Log(collision.GetComponent<Player>().health);
            Destroy(gameObject);
        }
    }
}
